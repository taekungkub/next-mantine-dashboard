"use client"
import { ActionIcon, Group, Text } from "@mantine/core"
import { DataTable, DataTableSortStatus } from "mantine-datatable"
import { useEffect, useState } from "react"
import sortBy from "lodash/sortBy"
import { IconChevronUp, IconEdit, IconEye, IconSelector, IconTrash } from "@tabler/icons-react"
import { ProductTy } from "@/types/type"
import ProductModal from "./ProductModal"
import { modals } from "@mantine/modals"
import { useRouter } from "next/navigation"

interface Props {
  data: Array<ProductTy>
}

const PAGE_SIZES = [10, 15, 20]

export default function ProductsTable({ data }: Props) {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1])

  useEffect(() => {
    setPage(1)
  }, [pageSize])

  const [sortStatus, setSortStatus] = useState<DataTableSortStatus<ProductTy>>({ columnAccessor: "#", direction: "asc" })
  const [records, setRecords] = useState(sortBy(data.slice(0, pageSize), "id"))

  useEffect(() => {
    const myData = sortBy(data, sortStatus.columnAccessor)

    setRecords(sortStatus.direction === "desc" ? myData.reverse() : myData)
  }, [sortStatus, data])

  useEffect(() => {
    const from = (page - 1) * pageSize
    const to = from + pageSize
    setRecords(data.slice(from, to))
  }, [page, pageSize])

  const router = useRouter()

  return (
    <>
      <DataTable
        withTableBorder
        withColumnBorders
        striped
        highlightOnHover
        textSelectionDisabled
        mih={150}
        records={records}
        columns={[
          {
            accessor: "id",
            title: "#",
            textAlign: "right",
            sortable: true,
          },
          { title: "Product", accessor: "title", sortable: true },
          { title: "Desc", accessor: "description", width: 200 },
          { title: "Price", accessor: "price", sortable: true, render: ({ price }: ProductTy) => <Text>$ {price}</Text> },
          { title: "Brand", accessor: "brand", sortable: true },
          { title: "Stock", accessor: "stock", sortable: true },
          { title: "Rating", accessor: "rating", sortable: true },
          { title: "Category", accessor: "category", sortable: true },
          {
            title: "Action",
            accessor: "actions",
            render: (product) => (
              <Group gap={4} justify="right" wrap="nowrap">
                <ActionIcon
                  size="sm"
                  variant="subtle"
                  color="green"
                  onClick={() =>
                    modals.open({
                      title: "Product infomation",
                      children: <ProductModal data={product} action="view" />,
                    })
                  }
                >
                  <IconEye size={16} />
                </ActionIcon>
                <ActionIcon size="sm" variant="subtle" color="blue" onClick={() => router.push("/products/edit/" + product.id)}>
                  <IconEdit size={16} />
                </ActionIcon>
                <ActionIcon
                  size="sm"
                  variant="subtle"
                  color="red"
                  onClick={() =>
                    modals.open({
                      title: "Product infomation",
                      children: <ProductModal data={product} action="delete" />,
                    })
                  }
                >
                  <IconTrash size={16} />
                </ActionIcon>
              </Group>
            ),
          },
        ]}
        sortStatus={sortStatus}
        onSortStatusChange={setSortStatus}
        sortIcons={{
          sorted: <IconChevronUp size={16} />,
          unsorted: <IconSelector size={16} />,
        }}
        totalRecords={data.length}
        paginationActiveBackgroundColor="grape"
        recordsPerPage={pageSize}
        page={page}
        onPageChange={(p) => setPage(p)}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={setPageSize}
        // onRowClick={({ record, index, event }) => {
        //   openModal({
        //     title: "Product information",
        //     children: (
        //       <Stack>
        //         <Text size="sm">
        //           You clicked on row[{index}], referring to company <em>{record.title}</em>.
        //           <br />
        //         </Text>
        //       </Stack>
        //     ),
        //   })
        // }}
      />
    </>
  )
}
