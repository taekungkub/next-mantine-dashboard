"use client"
import React from "react"

import { TextInput, PasswordInput, Checkbox, Anchor, Paper, Title, Text, Container, Group, Button, Flex } from "@mantine/core"
import { useForm, zodResolver } from "@mantine/form"
import { resetPasswordSchema } from "@/lib/validation.schema"

type Props = {}

export default function page({}: Props) {
  const form = useForm({
    initialValues: { password: "", confirmPassword: "" },
    validate: zodResolver(resetPasswordSchema),
  })

  async function handleSubmit() {}

  return (
    <Container size={500} style={{ height: "90vh", display: "grid", alignItems: "center" }}>
      <div>
        <Title order={2} ta="center">
          Reset Password!
        </Title>

        <form onSubmit={form.onSubmit((values) => handleSubmit())}>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <PasswordInput label="New Password" placeholder="New Password" required mt="md" {...form.getInputProps("password")} />
            <PasswordInput label="Confirm password" placeholder="Confirm new password" required mt="md" {...form.getInputProps("confirmPassword")} />
            <Button type="submit" fullWidth mt="xl">
              Reset password
            </Button>
            <Flex justify={"center"}></Flex>
          </Paper>
        </form>
      </div>
    </Container>
  )
}
