"use client"
import { Paper, Title, Text, Container, Group, Avatar } from "@mantine/core"
import { IconCheck, IconX } from "@tabler/icons-react"
import { useParams } from "next/navigation"
import { useEffect } from "react"

export default function Page() {
  const params = useParams()
  console.log(params.code)

  return (
    <Container size={500} style={{ height: "90vh", display: "grid", alignItems: "center" }}>
      <div>
        <Title ta="center" order={2}>
          Verify Email!
        </Title>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Group justify={"center"}>
            <Avatar color="teal" radius="sm">
              <IconCheck size="1.5rem" />
            </Avatar>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel veniam accusantium maiores quisquam porro asperiores repellat at quidem. Hic quisquam atque aspernatur sapiente officiis in quidem. Eum, repellendus excepturi.
            </Text>
            <Group justify={"center"}>
              <Avatar color="red" radius="sm">
                <IconX size="1.5rem" />
              </Avatar>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel veniam accusantium maiores quisquam porro asperiores repellat at quidem. Hic quisquam atque aspernatur sapiente officiis in quidem. Eum, repellendus excepturi.
              </Text>
            </Group>
          </Group>
        </Paper>
      </div>
    </Container>
  )
}
