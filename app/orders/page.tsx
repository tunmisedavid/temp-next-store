import SectionTitle from "@/components/global/SectionTitle"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { fetchUserOrders } from "@/utils/actions"
import { formatCurrency, formatDate } from "@/utils/format";


const OrdersPage = async() => {
  const orders = await fetchUserOrders();
  return (
    <>
      <SectionTitle text="Your orders" />
      <Table>
        <TableCaption>Total Orders: {orders.length} </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Products</TableHead>
            <TableHead>Orde Total</TableHead>
            <TableHead>Tax</TableHead>
            <TableHead>Shipping</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map(order => {
            const {products, orderTotal, tax, shipping, createdAt} = order
            return (
              <TableRow key={order.id}>
                <TableCell>{products} </TableCell>
                <TableCell>{formatCurrency(orderTotal)} </TableCell>
                <TableCell>{formatCurrency(tax)} </TableCell>
                <TableCell>{formatCurrency(shipping)} </TableCell>
                <TableCell>{formatDate(createdAt)} </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default OrdersPage
