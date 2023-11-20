import React from "react"
import DummyServices from "@/services/DummyServices"
import CustomerDetailSection from "../../components/CustomerDetailSection"
type Props = {
  params: {
    id: string
  }
}

export default async function page({ params }: Props) {
  const res = await DummyServices.customerById(params.id)

  return (
    <div>
      <CustomerDetailSection data={res} />
    </div>
  )
}
