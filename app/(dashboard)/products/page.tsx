import ProductsTable from "./components/ProductTable"
import DummyServices from "@/services/DummyServices"

export default async function Page() {
  const res = await DummyServices.products()
  const result = await res.json()

  return (
    <>
      <ProductsTable data={result.products || []} />
    </>
  )
}
