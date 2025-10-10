

import { Label } from "../ui/label";
import { Input } from "../ui/input";

const name = "price";
type FormInputNumberProps = {
  defaultValue?: number;
};


const PriceInput = ({defaultValue}: FormInputNumberProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">Price ($) </Label>
      <Input id={name} name={name} type="number" min={0} defaultValue={defaultValue || 100} required />
    </div>
  )
}

export default PriceInput
