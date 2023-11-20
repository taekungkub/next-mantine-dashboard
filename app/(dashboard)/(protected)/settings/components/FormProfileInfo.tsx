import { Box, Button, Group, SimpleGrid, TextInput, Textarea } from "@mantine/core"
import { useForm, zodResolver } from "@mantine/form"
import React from "react"
import { profileInfoSchema } from "@/lib/validation.schema"

type Props = {}

export default function FormProfileInfo({}: Props) {
  const form = useForm({
    validate: zodResolver(profileInfoSchema),
    initialValues: {
      fname: "",
      lname: "",
      location: "",
      about: "",
    },
  })

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput label="First name" {...form.getInputProps("fname")} />
        <TextInput label="Last name" {...form.getInputProps("lname")} />
      </SimpleGrid>
      <TextInput label="Location" {...form.getInputProps("location")} mt={"md"} />
      <Textarea label="About you" {...form.getInputProps("about")} mt={"md"} />
      <Box mt={"md"}>
        <Button type={"submit"}>Save</Button>
        <Button variant={"subtle"}>Cancel</Button>
      </Box>
    </form>
  )
}
