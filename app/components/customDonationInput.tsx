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
}): any {
  return (
    <div className="w-full">
      <h3 className="uppercase mb-2">Donation amount: <span className="color-white uppercase">{formatAmountForDisplay(value, currency)}</span> </h3>
      <input
        type="range"
        name={name}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        value={value}
        className="w-full color-[--black] color-[--purple] bg-[--purple]"
      ></input>
    </div>
  );
}