import React from "react"
import DummyServices from "@/services/DummyServices"
import CustomerDetailSection from "../../components/CustomerDetailSection"
import { getCustomer } from "@/hooks/useCustomer"

type Props = {
  params: {
    id: string
  }
}

export default async function page({ params }: Props) {
  const customer = await getCustomer(params.id)
  return <div>{<CustomerDetailSection data={customer} />}</div>
}
