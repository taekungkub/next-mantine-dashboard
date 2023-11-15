"use client"
import { Box, Button, Group } from "@mantine/core"
import React from "react"
import { ProductTy } from "@/types/type"
import { closeAllModals } from "@mantine/modals"

type Props = {
  data: ProductTy
  action: string
}

function FilterButton({ action }: { action: string }) {
  if (action === "view") {
    return <Button>Confirm</Button>
  } else if (action === "edit") {
    return <Button color={"yellow"}>Edit</Button>
  } else if (action === "delete") {
    return <Button color={"red"}>Delete</Button>
  }
}

export default function ProductModal({ data, action }: Props) {
  return (
    <>
      <Box>
        {JSON.stringify(data)}
        <Group justify={"end"} mt={"sm"}>
          <Button variant={"subtle"} onClick={() => closeAllModals()}>
            Cancel
          </Button>
          <FilterButton action={action} />
        </Group>
      </Box>
    </>
  )
}
