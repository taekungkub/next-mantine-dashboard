"use client"

import React, { useState } from "react"
import { TextInput, PasswordInput, Paper, Title, Container, Button } from "@mantine/core"
import { useForm, zodResolver } from "@mantine/form"
import { IconArrowLeft } from "@tabler/icons-react"
import { signupSchema } from "@/lib/validation.schema"
import Link from "next/link"
import useToast from "@/hooks/useToast"
import { useRouter } from "next/navigation"

type Props = {}

export default function Signup({}: Props) {
  const toast = useToast()
  const form = useForm({
    initialValues: { email: "tae@gmail.com", name: "tae", password: "!Test123456", confirmPassword: "!Test123456" },
    validate: zodResolver(signupSchema),
  })

  const [IsLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit() {
    try {
      setIsLoading(true)

      const data = {
        email: form.values.email,
        name: form.values.name,
        password: form.values.password,
        confirm_password: form.values.confirmPassword,
      }

      const res = await fetch("/api/signup", { method: "POST", body: JSON.stringify(data) })
      const result = await res.json()

      if (res.status != 200) {
        toast.error(result)
        return
      }

      toast.success("Success")
      router.push("/auth/signin")
    } catch (error) {
      toast.error("error")
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <Container size={420} style={{ height: "100vh", display: "grid", alignItems: "center" }}>
        <div>
          <Title ta="center">Create account!</Title>
          <form onSubmit={form.onSubmit((values) => handleSubmit())}>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
              <TextInput label="Email" placeholder="you@mantine.dev" {...form.getInputProps("email")} />
              <TextInput label="Name" placeholder="name" mt="md" {...form.getInputProps("name")} />
              <PasswordInput label="Password" placeholder="Your password" mt="md" {...form.getInputProps("password")} />
              <PasswordInput label="Confirm password" placeholder="Your confirm password" mt="md" {...form.getInputProps("confirmPassword")} />

              <Button fullWidth mt="xl" type="submit" loading={IsLoading}>
                Sign up
              </Button>
              <Button fullWidth variant="subtle" component={Link} href={"/auth/signin"}>
                Sign in
              </Button>
            </Paper>
          </form>
        </div>
      </Container>
    </div>
  )
}
