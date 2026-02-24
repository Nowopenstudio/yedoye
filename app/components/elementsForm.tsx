"use client";

import type { StripeError } from "@stripe/stripe-js";

import * as React from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
  Elements,
} from "@stripe/react-stripe-js";

import CustomDonationInput from "./customDonationInput";

import { formatAmountForDisplay } from "../util/stripeHelpers";
import * as config from "../config";
import getStripe from "../util/get-stripejs";
import { createPaymentIntent } from "../actions/stripe";
import RecordScroll from "../recordings/[slug]/recordScroll";

function CheckoutForm({data}:any){
  const [input, setInput] = React.useState<{
    customDonation: number;
    cardholderName: string;
  }>({
    customDonation: 10,
    cardholderName: "",
  });
  const [paymentType, setPaymentType] = React.useState<string>("");
  const [payment, setPayment] = React.useState<{
    status: "initial" | "processing" | "error";
  }>({ status: "initial" });
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const stripe = useStripe();
  const elements = useElements();
  const formRef = React.useRef<HTMLFormElement>(null);

  const PaymentStatus = ({ status }: { status: string }) => {
    switch (status) {
      case "processing":
      case "requires_payment_method":
      case "requires_confirmation":
        return <h2>Processing...</h2>;

      case "requires_action":
        return <h2>Authenticating...</h2>;

      case "succeeded":
        return <h2>Payment Succeeded 🥳</h2>;

      case "error":
        return (
          <>
            <h2>Error 😭</h2>
            <p className="error-message">{errorMessage}</p>
          </>
        );

      default:
        return null;
    }
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

    elements?.update({ amount: input.customDonation * 100 });
  };

  const handleSubmit = async () => {
    try {
      
      if (!formRef.current?.reportValidity()) return;
      if (!elements || !stripe) return;

      setPayment({ status: "processing" });

      const { error: submitError } = await elements.submit();

      if (submitError) {
        setPayment({ status: "error" });
        setErrorMessage(submitError.message ?? "An unknown error occurred");

        return;
      }

      // Create a PaymentIntent with the specified amount.
      const { client_secret: clientSecret } = await createPaymentIntent(
        new FormData(formRef.current as HTMLFormElement),
      );

      // Use your card Element with other Stripe.js APIs
      const { error: confirmError } = await stripe!.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: data.info.url,
          payment_method_data: {
            billing_details: {
              name: input.cardholderName,
            },
          },
        },
      });

      if (confirmError) {
        setPayment({ status: "error" });
        setErrorMessage(confirmError.message ?? "An unknown error occurred");
      }
    } catch (err) {
      const { message } = err as StripeError;

      setPayment({ status: "error" });
      setErrorMessage(message ?? "An unknown error occurred");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} ref={formRef}>
        <CustomDonationInput
          className="elements-style"
          name="customDonation"
          value={input.customDonation}
          min={config.MIN_AMOUNT}
          max={config.MAX_AMOUNT}
          step={config.AMOUNT_STEP}
          currency={config.CURRENCY}
          onChange={handleInputChange}
        />
        <fieldset className="elements-style">
          {paymentType === "card" ? (
            <input className='w-full py-[--xs] px-[--sm] border my-[--xs] bg-transparent border-black'
              placeholder="Cardholder name"
              type="Text"
              name="cardholderName"
              onChange={handleInputChange}
              required
            />
          ) : null}
          <div className="FormRow elements-style">
            <PaymentElement
            options={{
              layout: {
                type: 'tabs',
                defaultCollapsed: false,
              }
            }}
              onChange={(e) => {
                setPaymentType(e.value.type);
              }}
            />
          </div>
        </fieldset>
        
        <div onClick={handleSubmit} className="fixed bottom-[58px] left-0 md:bottom-[88px] lg:bottom-[48px] xl:bottom-[80px] bg-[--black] w-[100vw]  overflow-hidden h-[50px] lg:h-[80px] z-[100] flex items-center cursor-pointer"><RecordScroll  data={{cta:`Pay ${formatAmountForDisplay(input.customDonation, config.CURRENCY)} for ${data.title}`}} time={Math.floor(Math.random() * 6)+12}/></div>
      </form>
      <PaymentStatus status={payment.status} />
    </>
  );
}

export default function ElementsForm({data}:any) {
  const appearance = {
    theme: 'stripe' as const,
    rules: {
      '.Label': {
        color: '#ffffff', // Example: changes label color to white
        'font-size': '14px', // Example: changes label font size
        'font-weight': '700',
        // Other supported CSS properties...
      },
      // You can also style different states:
      '.Label--invalid': {
        color: '#FF0000', // Example: color for invalid labels
      },
      '.Tab': {
        border: '3px solid #000000',
        color: '#ffffff',
        fontSize: '18px',
        marginBottom: '10px',
      },
      '.Tab--selected': {
      borderColor: '#000000',
      backgroundColor: '#000000',
      color: '#3315d1' },

      '.Input': {
        border: '1px solid #000000',
        borderRadius: '4px',
        padding: '10px',
        fontSize: '16px',
        fontWeight: '700',
        color: '#ffffff',
        borderWidth: '3px',
      },
    },
  
    variables: {
      colorPrimary: '#000000',
      colorSecondary: '#000000',
      colorAccent: '#000000',
      colorBackground: '#3315d1',
      colorText: '#000000',
      colorDanger: '#ff0000',
      colorWarning: '#ff0000',
      fontFamily: 'courier, system-ui, sans-serif',
      labels:'condensed',
      fontSize: '16px',
      fontSizeSm: '16px',
      fontWeightSm: 'bold',
      fontWeight: 'bold',
      spacingUnit: '2px',
      borderRadius: '4px',
      // See all possible variables below
    }
  };
  return (
    <Elements
      stripe={getStripe()}
      
      options={{
        
        currency: config.CURRENCY,
        mode: "payment",
        amount: Math.round(config.MAX_AMOUNT / config.AMOUNT_STEP),
        appearance,
      }}
    >
      <CheckoutForm data={data}/>
    </Elements>
  );
}