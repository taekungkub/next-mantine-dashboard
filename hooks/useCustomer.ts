import { QueryClient, useQuery } from "@tanstack/react-query"
import DummyServices from "../services/DummyServices"
import { queryKey } from "@/constant/query"
import { CustomerTy } from "../types/type"
import { DUMMYJSON_BASE_URL } from "../constant/endpoints"

export const fetchUsers = async (): Promise<{
  users: CustomerTy[]
}> => {
  try {
    const res = await fetch(`${DUMMYJSON_BASE_URL}/users`)
    return res.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

//for server
export async function fetchCustomer() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: [queryKey.CUSTOMERS],
    queryFn: async () => fetchUsers(),
  })
}

//for client component
export const useCustomers = () => {
  return useQuery({
    queryKey: [queryKey.CUSTOMERS],
    queryFn: async () => fetchUsers(),
  })
}

export async function getCustomer(id: string): Promise<CustomerTy> {
  try {
    const res = await fetch(`${DUMMYJSON_BASE_URL}/users/${id}`)
    return res.json()
  } catch (e) {
    throw e
  }
}
