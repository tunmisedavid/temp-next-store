import { formatCurrency } from "@/utils/format";
import { Cart } from "@prisma/client";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Card, CardTitle } from "../ui/card";
import FormContainer from "../form/FormContainer";
import { createOrderAction } from "@/utils/actions";
import { SubmitButton } from "../form/Buttons";

function CartTotals({ cart }: { cart: Cart }) {
  const { cartTotal, shipping, tax, orderTotal } = cart;

  return (
    <div>
      <Card className="p-8">
        <CartTotalRow label="Subtotal" amount={cartTotal} />
        <CartTotalRow label="shipping" amount={shipping} />
        <CartTotalRow label="Tax" amount={tax} />
        <CardTitle className='mt-8'>
          <CartTotalRow label='order Total' amount={orderTotal} lastRow />
        </CardTitle>
      </Card>
      <FormContainer action={createOrderAction}>
        <SubmitButton text='Place order' className="w-full mt-8 " />
      </FormContainer>
    </div>
  );
}

function CartTotalRow({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}){
  return <>
    <p className="flex justify-between text-sm">
      <span>{label} </span>
      <span>{formatCurrency(amount)} </span>
    </p>
    {lastRow ? null : <Separator className="my-2" />}
  </>
};

export default CartTotals;
