"use client"
import { TextInput, PasswordInput, Checkbox, Anchor, Paper, Title, Text, Container, Group, Button, Box } from "@mantine/core"
import { useForm, zodResolver } from "@mantine/form"
import { signinSchema } from "@/lib/validation.schema"
import { useState } from "react"
import Link from "next/link"
import useToast from "@/hooks/useToast"
import { signIn } from "next-auth/react"

export default function SigninPage() {
  const [loading, setLoading] = useState(false)

  const form = useForm({
    initialValues: { email: "admin@gmail.com", password: "!Test123456" },
    validate: zodResolver(signinSchema),
  })
  const toast = useToast()

  async function handleSubmit() {
    try {
      setLoading(true)

      const data = {
        email: form.values.email,
        password: form.values.password,
      }

      const res = await fetch("/api/signin", { method: "POST", body: JSON.stringify(data) })
      if (res.status != 200) {
        toast.error(await res.json())
        return
      }
      const result = await signIn("credentials", {
        email: form.values.email,
        password: form.values.password,
        redirect: true,
        callbackUrl: "/dashboard",
      })

      toast.success("Login successfully !")
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container size={420} style={{ height: "90vh", display: "grid", alignItems: "center" }}>
      <div>
        <Title ta="center">Welcome back!</Title>
        <Text size="sm" ta="center" mt={5}>
          Do not have an account yet?
          <Anchor size="sm" component={Link} ml={"xs"} href={"/auth/signup"}>
            Create account
          </Anchor>
        </Text>

        <form onSubmit={form.onSubmit((values) => handleSubmit())}>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" placeholder="you@mantine.dev" {...form.getInputProps("email")} autoComplete="username" />
            <PasswordInput label="Password" placeholder="Your password" mt="md" {...form.getInputProps("password")} autoComplete="current-password" />
            <Group justify={"space-between"} mt="lg">
              <Checkbox label="Remember me" />
              <Anchor component={Link} size="sm" href={"/auth/forgotpassword"}>
                Forgot password?
              </Anchor>
            </Group>
            <Button type="submit" fullWidth mt="xl" loading={loading}>
              Sign in
            </Button>
          </Paper>
          <Box>
            <Text fz={"sm"}>email: admin@gmail.com password: !Test123456 </Text>
          </Box>
          <Box>
            <Text fz={"sm"}>email: superadmin@gmail.com password: !Test123456 </Text>
          </Box>
        </form>
      </div>
    </Container>
  )
}
