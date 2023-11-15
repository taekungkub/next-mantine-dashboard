import { Box, Button, Card, Group, PasswordInput, Stack, Switch, Text } from "@mantine/core"
import { useForm, zodResolver } from "@mantine/form"
import React from "react"
import { changePasswordSchema } from "@/lib/validation.schema"
import { IconLock } from "@tabler/icons-react"

type Props = {}

export default function FormChangePassword({}: Props) {
  const form = useForm({
    validate: zodResolver(changePasswordSchema),
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  })

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Box p={"lg"}>
        <Text fz="md" fw={500}>
          Change Password
        </Text>
        <Text fz="xs" c="dimmed" mt={3} mb="sm">
          For an improved account security
        </Text>
        <Stack>
          <PasswordInput placeholder="Old Password" leftSection={<IconLock size={"0.9rem"} />} {...form.getInputProps("oldPassword")} />
          <PasswordInput placeholder="New Password" leftSection={<IconLock size={"0.9rem"} />} {...form.getInputProps("newPassword")} />
          <PasswordInput placeholder="Confirm New Password" leftSection={<IconLock size={"0.9rem"} />} {...form.getInputProps("confirmNewPassword")} />
        </Stack>

        <Box mt={"md"}>
          <Button variant={"subtle"}>Cancel</Button>
          <Button type={"submit"}>Save</Button>
        </Box>
      </Box>
    </form>
  )
}
