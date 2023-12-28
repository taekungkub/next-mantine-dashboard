import React from "react"
import DummyServices from "@/services/DummyServices"
import CustomerDetailSection from "../../components/CustomerDetailSection"
import { fetchCustomerDetail } from "../../../../../lib/customer.services"

type Props = {
  params: {
    id: string
  }
}

export default async function page({ params }: Props) {
  const customer = await fetchCustomerDetail(params.id)
  return <div>{<CustomerDetailSection data={customer} />}</div>
}
