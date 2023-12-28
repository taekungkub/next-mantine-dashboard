import { DUMMYJSON_BASE_URL } from "./constant/endpoints"
import { CustomerTy } from "../types/type"

export const fetchCustomer = async (): Promise<{
  users: CustomerTy[]
}> => {
  try {
    const res = await fetch(`${DUMMYJSON_BASE_URL}/users`)
    return res.json()
  } catch (error) {
    throw error
  }
}

export async function fetchCustomerDetail(id: string): Promise<CustomerTy> {
  try {
    const res = await fetch(`${DUMMYJSON_BASE_URL}/users/${id}`)
    return res.json()
  } catch (e) {
    throw e
  }
}
