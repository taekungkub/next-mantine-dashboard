"use client"
import React from "react"

import { Paper, Title, Text, TextInput, Button, Container, Group, Anchor, Center, Box, rem, Flex } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import Link from "next/link"
import { useForm, zodResolver } from "@mantine/form"
import { forgotPasswordSchema } from "@/lib/validation.schema"

type Props = {}

export default function page({}: Props) {
  const form = useForm({
    initialValues: { email: "" },
    validate: zodResolver(forgotPasswordSchema),
  })

  async function handleSubmit() {}

  return (
    <div>
      <Container size={460} style={{ height: "90vh", display: "grid", alignItems: "center" }}>
        <div>
          <Title ta="center">Forgot your password?</Title>
          <Text size="sm" ta="center" mt={5}>
            Enter your email to get a reset link
          </Text>
          <form onSubmit={form.onSubmit((values) => handleSubmit())}>
            <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
              <TextInput label="Your Email" {...form.getInputProps("email")} required />
              <Flex direction={"column-reverse"} mt="lg">
                <Button variant={"subtle"} mt={"sm"} component={Link} href={"/auth/signin"}>
                  <Center inline>
                    <IconArrowLeft />
                    <Box ml={5}>Back to the signin page</Box>
                  </Center>
                </Button>
                <Button type="submit">Reset password</Button>
              </Flex>
            </Paper>
          </form>
        </div>
      </Container>
    </div>
  )
}
