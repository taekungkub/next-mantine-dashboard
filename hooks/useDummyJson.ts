import { QueryClient, useQuery } from "@tanstack/react-query"
import DummyServices from "../services/DummyServices"
import { queryKey } from "@/constant/query"

//for server
export async function fetchCustomer() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: [queryKey.CUSTOMERS],
    queryFn: async () => await DummyServices.customers2(),
  })
}

//for client
export const getAllCustomers = () => {
  return useQuery({
    queryKey: [queryKey.CUSTOMERS],
    queryFn: async () => {
      const res = await DummyServices.customers2()
      return res.data.users
    },
  })
}

export const getCustomerById = (id: string) => {
  return useQuery({
    queryKey: [queryKey.CUSTOMERS, id],
    queryFn: async () => {
      const res = await DummyServices.customerById2(id)
      return res.data
    },
  })
}
