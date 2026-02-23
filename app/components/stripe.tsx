import type { Metadata } from "next";

import ElementsForm from "./elementsForm";
import { PortableText } from "next-sanity";


export default function StripeContainer({
  data,
}: any): JSX.Element {
  return (
    <div className="w-full richText min-h-full py-[--xl]">
<div className="mb-[--sm] richText"><PortableText value={data.donation.copy}/></div>
      
      <ElementsForm data={data}/>
    </div>
  );
}