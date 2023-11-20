"use client"
import { Avatar, Box, Button, Card, Divider, Drawer, Flex, Group, Image, ScrollArea, TextInput } from "@mantine/core"
import { CustomerTy } from "@/types/type"
import { useForm } from "@mantine/form"
import { useEffect, useState } from "react"
import useToast from "@/hooks/useToast"

interface Props {
  opened: boolean
  close: () => void
  open: () => void
  customerData?: CustomerTy | null
}

function EditCustomerDrawer({ opened, close, open, customerData }: Props) {
  const form = useForm({
    initialValues: customerData,
  })

  useEffect(() => {
    form.setValues({
      ...customerData,
    })
  }, [customerData])

  const [IsLoading, setIsLoading] = useState(false)
  const toast = useToast()

  async function onSubmitUpdate() {
    setIsLoading(true)

    setTimeout(() => {
      console.log(form.values)
      toast.success("Update successfully !")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Drawer opened={opened} onClose={close} title={`Edit ${customerData?.firstName}`} position="right" scrollAreaComponent={ScrollArea.Autosize}>
      <form>
        <ScrollArea>
          <Flex justify={"center"}>
            <Avatar src={customerData?.image} size={"5rem"} radius={"999px"} bg="gray.2"></Avatar>
          </Flex>

          <TextInput label="Firstname" {...form.getInputProps("firstName")} />
          <TextInput label="Lastname" mt={20} {...form.getInputProps("lastName")} />
          <TextInput label="Email" mt={20} {...form.getInputProps("email")} />
          <TextInput label="Phone" mt={20} {...form.getInputProps("phone")} />
        </ScrollArea>

        <Box px={0} style={{ position: "sticky", bottom: 0 }} py={20}>
          <Button onClick={() => onSubmitUpdate()} loading={IsLoading}>
            Update
          </Button>
          <Button variant="subtle" onClick={close}>
            Cancel
          </Button>
        </Box>
      </form>
    </Drawer>
  )
}

export default EditCustomerDrawer
