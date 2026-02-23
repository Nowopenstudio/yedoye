import { formatAmountForDisplay } from "../util/stripeHelpers";
export default function CustomDonationInput({
  name,
  min,
  max,
  currency,
  step,
  onChange,
  value,
  className,
}: {
  name: string;
  min: number;
  max: number;
  currency: string;
  step: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  className?: string;
}): JSX.Element {
  return (
    <div className="w-full">
      <p ><strong>Custom donation amount</strong></p>
      <div><p className="color-[--white]"><strong>{formatAmountForDisplay(value, currency)}</strong></p></div>
      <input
        type="range"
        name={name}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        value={value}
        className="w-full color-[--black]"
      ></input>
    </div>
  );
}