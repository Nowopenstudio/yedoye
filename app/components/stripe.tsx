import type { Metadata } from "next";

import ElementsForm from "./elementsForm";
import { PortableText } from "next-sanity";


export default function StripeContainer({
  data,
}: any) {
  return (
    <div className="w-full richText min-h-full my-[--xl] rounded-[--sm] border-2 border-[--black] bg-[--purple] text-[--black]  overflow-hidden">
<div className=" richText p-[--sm] payForm"><PortableText value={data.donation?data.donation.copy:""
}/></div>
      
      <div className="px-[--sm]"><ElementsForm data={data}/></div>
      <div className="mb-[--sm] richText px-[--sm] pt-[--sm] payForm"><PortableText value={data.donation?data.donation.subs:""
}/></div>
<a href="https://buy.stripe.com/6oUeVccm79uF20MbmY7Zu00"  target="_blank" className="w-full"><div className="full bg-[--black] text-[--purple] hover:bg-[--purple] hover:text-[--white p-[--sm] text-center uppercase"><h2>Subscribe</h2></div></a>
    </div>

  );
}