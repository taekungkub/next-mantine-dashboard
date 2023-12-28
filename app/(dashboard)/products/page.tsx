import { fetchProducts } from "@/lib/product.services"
import ProductsTable from "./components/ProductTable"
import { Suspense } from "react"

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
