import { SectionUserStats } from "../components/SectionCustomer"
import CustomerDataTable from "../components/CustomerDataTable"
import { fetchCustomer } from "@/hooks/useCustomer"
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query"

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
