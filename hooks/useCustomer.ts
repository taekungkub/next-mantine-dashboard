import { QueryClient, useQuery } from "@tanstack/react-query"
import { queryKey } from "@/lib/constant/query"
import { fetchCustomer } from "../lib/customer.services"

export default function useCustomer() {
  const useCustomerQuery = () => {
    return useQuery({
      queryKey: [queryKey.CUSTOMERS],
      queryFn: async () => fetchCustomer(),
    })
  }

  async function preFetchCustomer() {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
      queryKey: [queryKey.CUSTOMERS],
      queryFn: async () => fetchCustomer(),
    })
  }

  return {
    useCustomerQuery,
    preFetchCustomer,
  }
}
