import { Box, Button, Card, Group, PasswordInput, Stack, Switch, Text } from "@mantine/core"

const data = [
  { title: "Messages", description: "Direct messages you have received from other users" },
  { title: "Review requests", description: "Code review requests from your team members" },
  { title: "Comments", description: "Daily digest with comments on your posts" },
  {
    title: "Recommendations",
    description: "Digest with best community posts from previous week",
  },
]

export function FormNotification() {
  const items = data.map((item) => (
    <Group justify="space-between" wrap="nowrap" gap="xl" key={item.title} mt={"md"}>
      <div>
        <Text>{item.title}</Text>
        <Text size="xs" c="dimmed">
          {item.description}
        </Text>
      </div>
      <Switch onLabel="ON" offLabel="OFF" size="lg" />
    </Group>
  ))

  return (
    <>
      <Box p={"lg"}>
        <Text fz="md" fw={500}>
          Notifications
        </Text>
        <Text fz="xs" c="dimmed" mt={3} mb="sm">
          Configure how you receive notifications
        </Text>
        {items}
        <Box mt={"md"}>
          <Button>Save</Button>
          <Button variant={"subtle"}>Cancel</Button>
        </Box>
      </Box>
    </>
  )
}
