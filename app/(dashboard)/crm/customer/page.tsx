import DummyServices from "@/services/DummyServices"
import { SectionUserStats } from "../components/SectionCustomer"
import CustomerDataTable from "../components/CustomerDataTable"

export default async function page() {
  const res = await DummyServices.customers()

  return (
    <>
      Customer page
      <SectionUserStats />
      <CustomerDataTable list={res.users} />
    </>
  )
}
