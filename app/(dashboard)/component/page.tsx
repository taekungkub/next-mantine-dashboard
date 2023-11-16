import { Box, Button, Card, Group, Paper, Text, Title } from "@mantine/core"

export default function Page() {
  return (
    <div>
      <Box>
        <Title order={3} ta={"center"}>
          Button
        </Title>
        <Group display={"flex"} gap={4}>
          <Button>primary</Button>
          <Button color={"success"}>success</Button>
          <Button color={"danger"}>danger</Button>
          <Button color={"warning"}>warning</Button>
        </Group>
        <Group display={"flex"} gap={4} mt={"md"}>
          <Button variant={"outline"}>primary</Button>
          <Button color={"success"} variant={"outline"}>
            success
          </Button>
          <Button color={"danger"} variant={"outline"}>
            danger
          </Button>
          <Button color={"warning"} variant={"outline"}>
            warning
          </Button>
        </Group>
        <Group display={"flex"} gap={4} mt={"md"}>
          <Button variant={"light"}>primary</Button>
          <Button color={"success"} variant={"light"}>
            success
          </Button>
          <Button color={"danger"} variant={"light"}>
            danger
          </Button>
          <Button color={"warning"} variant={"light"}>
            warning
          </Button>
        </Group>
        <Group display={"flex"} gap={4} mt={"md"}>
          <Button variant={"subtle"}>primary</Button>
          <Button color={"success"} variant={"subtle"}>
            success
          </Button>
          <Button color={"danger"} variant={"subtle"}>
            danger
          </Button>
          <Button color={"warning"} variant={"subtle"}>
            warning
          </Button>
        </Group>
        <Group display={"flex"} gap={4} mt={"md"}>
          <Button loading>primary</Button>
          <Button color={"success"} loading>
            success
          </Button>
          <Button color={"danger"} loading>
            danger
          </Button>
          <Button color={"warning"} loading>
            warning
          </Button>
        </Group>
        <Group display={"flex"} gap={4} mt={"md"}>
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
      </Box>

      <Box mt={"md"}>
        <Title order={3} ta={"center"}>
          Typrography
        </Title>
        <Title order={1}>Heading 1</Title>
        <Title order={2}>Heading 2</Title>
        <Title order={3}>Heading 3</Title>
        <Title order={4}>Heading 4</Title>
        <Title order={5}>Heading 5</Title>
        <Title order={6}>Heading 6</Title>

        <Text fz={"xl"} mt={"sm"}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus earum vitae placeat repellat, esse, voluptatibus, recusandae nesciunt aliquam sed expedita enim! Beatae exercitationem aspernatur quisquam consequatur, rerum voluptates
          possimus similique!
        </Text>
        <Text fz={"lg"} mt={"sm"}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus earum vitae placeat repellat, esse, voluptatibus, recusandae nesciunt aliquam sed expedita enim! Beatae exercitationem aspernatur quisquam consequatur, rerum voluptates
          possimus similique!
        </Text>
        <Text fz={"md"} mt={"sm"}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus earum vitae placeat repellat, esse, voluptatibus, recusandae nesciunt aliquam sed expedita enim! Beatae exercitationem aspernatur quisquam consequatur, rerum voluptates
          possimus similique!
        </Text>
        <Text fz={"sm"} mt={"sm"}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus earum vitae placeat repellat, esse, voluptatibus, recusandae nesciunt aliquam sed expedita enim! Beatae exercitationem aspernatur quisquam consequatur, rerum voluptates
          possimus similique!
        </Text>
        <Text fz={"xs"} mt={"sm"}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus earum vitae placeat repellat, esse, voluptatibus, recusandae nesciunt aliquam sed expedita enim! Beatae exercitationem aspernatur quisquam consequatur, rerum voluptates
          possimus similique!
        </Text>
      </Box>
    </div>
  )
}
