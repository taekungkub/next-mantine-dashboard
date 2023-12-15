import { getProducts } from "@/hooks/useProduct"
import ProductsTable from "./components/ProductTable"
import { Suspense } from "react"

export default async function Page() {
  const products = await getProducts()

  return (
    <>
      <Suspense fallback={"loading..."}>
        <ProductsTable data={products.products || []} />
      </Suspense>
    </>
  )
}
