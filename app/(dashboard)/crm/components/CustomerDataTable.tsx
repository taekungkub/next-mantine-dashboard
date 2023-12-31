"use client"
import React from "react"
import { CustomerTy } from "@/types/type"
import { DataTable, DataTableSortStatus } from "mantine-datatable"
import { useEffect, useState } from "react"
import sortBy from "lodash/sortBy"
import { IconChevronUp, IconSelector } from "@tabler/icons-react"
import { Anchor, Button } from "@mantine/core"
import Link from "next/link"
import { useDisclosure } from "@mantine/hooks"
import EditCustomerDrawer from "../components/EditCustomerDrawer"
import useCustomers from "@/hooks/useCustomer"

const PAGE_SIZES = [10, 15, 20]

export default function CustomerDataTable() {
  const { useCustomerQuery } = useCustomers()
  const { data, isLoading } = useCustomerQuery()

  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1])

  useEffect(() => {
    setPage(1)
  }, [pageSize])

  const [sortStatus, setSortStatus] = useState<DataTableSortStatus<CustomerTy>>({ columnAccessor: "#", direction: "asc" })
  const [records, setRecords] = useState(sortBy(data?.users?.slice(0, pageSize), "id"))

  useEffect(() => {
    const myData = sortBy(data?.users, sortStatus.columnAccessor)

    setRecords(sortStatus.direction === "desc" ? myData.reverse() : myData)
  }, [sortStatus, data?.users])

  useEffect(() => {
    const from = (page - 1) * pageSize
    const to = from + pageSize
    setRecords(data ? data.users.slice(from, to) : [])
  }, [page, pageSize])

  const [opened, { open, close }] = useDisclosure(false)

  const [selectedCustomer, setSelectedCustomer] = useState<CustomerTy | null>(null)

  return (
    <>
      <DataTable
        withTableBorder
        withColumnBorders
        striped
        highlightOnHover
        textSelectionDisabled
        mih={150}
        fetching={isLoading}
        records={records}
        borderRadius={"md"}
        mt={"lg"}
        columns={[
          {
            accessor: "id",
            title: "#",
            textAlign: "right",
            sortable: true,
          },
          {
            title: "Name",
            accessor: "name",
            render: (customer) => (
              <>
                <Anchor component={Link} href={`/crm/customer/${customer.id}`} target="_self" underline="hover">
                  {customer.firstName} {customer.lastName}
                </Anchor>
              </>
            ),
          },
          { title: "Age", accessor: "age", sortable: true },
          { title: "Email", accessor: "email", sortable: true },
          { title: "Phone", accessor: "phone", sortable: true },
          {
            title: "Address",
            accessor: "address",
            render: (customer) => <>{customer.address.address}</>,
          },
          {
            title: "Action",
            accessor: "actions",
            textAlign: "center",
            render: (customer) => (
              <>
                <Button
                  size="xs"
                  variant="subtle"
                  onClick={() => {
                    setSelectedCustomer(customer)
                    open()
                  }}
                >
                  EDIT
                </Button>
              </>
            ),
          },
        ]}
        sortStatus={sortStatus}
        onSortStatusChange={setSortStatus}
        sortIcons={{
          sorted: <IconChevronUp size={16} />,
          unsorted: <IconSelector size={16} />,
        }}
        totalRecords={data?.users?.length}
        paginationActiveBackgroundColor="grape"
        recordsPerPage={pageSize}
        page={page}
        onPageChange={(p) => setPage(p)}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={setPageSize}
      />

      <EditCustomerDrawer opened={opened} close={close} open={open} customerData={selectedCustomer} />
    </>
  )
}
