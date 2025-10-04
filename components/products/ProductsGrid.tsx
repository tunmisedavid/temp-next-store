import { formatCurrency } from "@/utils/format"
import { Product } from "@prisma/client"
import Link from "next/link"
import { Card, CardContent } from "../ui/card"
import Image from "next/image"
import FavouriteToggleButton from "./FavouriteToggleButton"



const ProductsGrid = ({products}: {products:Product[]}) => {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map(product => {
        const {name,price, image} = product
        const productId = product.id
        const dollarsAmout = formatCurrency(price)
        return (
          <article key={productId} className="group relative">
            <Link href={`/products/${productId}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500 ">
                <CardContent className="p-4">
                  <div className="relative h-64 md:h-48 overflow-hidden ">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 3vw" priority
                      className="object-cover w-full rounded transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4 text-center ">
                    <h2 className="text-lg capitalize">{name} </h2>
                    <p className="text-muted-foreground mt-2">{dollarsAmout} </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-7 right-7 z-50">
              <FavouriteToggleButton productId={productId} />
            </div>
          </article>
        );
})}
    </div>
  )
}

export default ProductsGrid
