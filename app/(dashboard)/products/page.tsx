import ProductsTable from "./components/ProductTable"
import { Suspense } from "react"
import { fetchProducts } from "../../../lib/product.services"

export default async function Page() {
  const products = await fetchProducts()

  return (
    <>
      <Suspense fallback={"loading..."}>
        <ProductsTable data={products.products || []} />
      </Suspense>
    </>
  )
}
