import { SectionUserStats } from "../components/SectionCustomer"
import CustomerDataTable from "../components/CustomerDataTable"
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query"
import { fetchCustomer } from "../../../../lib/customer.services"

export default async function page() {
  const queryClient = new QueryClient()

  fetchCustomer()

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SectionUserStats />
        <CustomerDataTable />
      </HydrationBoundary>
    </>
  )
}
