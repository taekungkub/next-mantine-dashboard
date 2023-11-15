import { Box, Button, Card, Group } from "@mantine/core"

export default function Page() {
  return (
    <div>
      <Group display={"flex"} gap={4}>
        <Button>filled</Button>
        <Button variant={"outline"}>outline</Button>
        <Button variant={"light"}>light</Button>
        <Button variant={"subtle"}>subtle</Button>
        <Button variant={"gradient"}>gradient</Button>
        <Button variant={"transparent"}>transparent</Button>
      </Group>

      <Group display={"flex"} gap={4} mt={12}>
        <Button loading>loading</Button>
        <Button loading loaderProps={{ type: "dots" }}>
          Loading button
        </Button>
      </Group>

      <Group display={"flex"} gap={4} mt={12}>
        <Button>basic</Button>
        <Button>form</Button>
      </Group>
    </div>
  )
}
