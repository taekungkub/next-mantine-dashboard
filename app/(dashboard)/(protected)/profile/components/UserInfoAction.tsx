"use client"
import { Avatar, Text, Button, Paper, Group, Box, ThemeIcon, Title, Divider, Stack, Flex } from "@mantine/core"
import { useSession } from "next-auth/react"

export function UserInfoAction() {
  const { data } = useSession()
  return (
    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
      <Avatar src={`/uploads/avatar/${data?.user.profile_picture}`} size={120} radius={120} mx="auto" />
      <Text ta="center" fz="lg" fw={500} mt="md">
        {data?.user.name}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        {data?.user.email}
      </Text>

      <Button variant="default" fullWidth mt="md">
        Send message
      </Button>
    </Paper>
  )
}

export function AboutSection() {
  return (
    <div>
      <Paper withBorder p={"xl"}>
        <Title order={6} c={"dimmed"}>
          ABOUT ME
        </Title>
        <Text mt={"xl"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Falli igitur possumus. Praeteritis, inquit, gaudeo. Duo Reges: constructio interrete. Idemne, quod iucunde? Quis enim redargueret? Non semper, inquam; Quid nunc honeste dicit? Eam tum
          adesse, cum dolor omnis absit; Negat enim summo bono afferre incrementum diem.
        </Text>

        <Divider my={"xl"} />

        <Title order={6} c={"dimmed"}>
          ABOUT ME
        </Title>
        <Text mt={"xl"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Falli igitur possumus. Praeteritis, inquit, gaudeo. Duo Reges: constructio interrete. Idemne, quod iucunde? Quis enim redargueret? Non semper, inquam; Quid nunc honeste dicit? Eam tum
          adesse, cum dolor omnis absit; Negat enim summo bono afferre incrementum diem.
        </Text>

        <Divider my={"xl"} />

        <Title order={6} c={"dimmed"}>
          SKILL
        </Title>
        <Text mt={"xl"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Falli igitur possumus. Praeteritis, inquit, gaudeo. Duo Reges: constructio interrete. Idemne, quod iucunde? Quis enim redargueret? Non semper, inquam; Quid nunc honeste dicit? Eam tum
          adesse, cum dolor omnis absit; Negat enim summo bono afferre incrementum diem.
        </Text>
      </Paper>
    </div>
  )
}

const toolList = [
  {
    title: "Adobe illustrator",
    image: "https://tairo.cssninja.io/img/stacks/illustrator.svg",
  },
  {
    title: "Jira software",
    image: "https://tairo.cssninja.io/img/logos/brands/jira.svg",
  },
  {
    title: "Microsofe office",
    image: "https://tairo.cssninja.io/img/logos/brands/office.svg",
  },
]

export function ToolSection() {
  const items = toolList.map((v) => (
    <div key={v.title}>
      <Box mt={"xl"}>
        <Text>{v.title}</Text>
        <Text fz={"xs"} c={"dimmed"}>
          {v.title}
        </Text>
      </Box>
    </div>
  ))

  return <div>{items}</div>
}
