import { Group, Paper, ThemeIcon, Text, RingProgress, Center, Badge, Flex } from "@mantine/core"
import { IconArrowUpRight, IconArrowDownRight, Icon24Hours, IconUser } from "@tabler/icons-react"

type ColorType = "UP" | "DOWN"

interface Props {
  title: string
  value: number
  percent: number
  type: ColorType
  children?: React.ReactNode
}

function CardStatsCustomer({ title, value, percent, type, children }: Props) {
  const DiffIcon = 123 > 0 ? IconArrowUpRight : IconArrowDownRight

  return (
    <Paper withBorder p="md" radius="md" py={"lg"}>
      <Group justify={"space-between"}>
        <Group>
          {children}
          <div>
            <Text c="dimmed" tt="uppercase" fz="xs">
              {title}
            </Text>
            <Text fw={600} fz={"xl"}>
              {value}
            </Text>
          </div>
        </Group>
        <Badge p={"sm"} color={type === "UP" ? "teal" : "red"} variant={"light"}>
          <Flex gap={4} align={"center"}>
            {type === "UP" ? <IconArrowUpRight size={"1rem"} /> : <IconArrowDownRight />}
            <Text fw={700}>{percent}%</Text>
          </Flex>
        </Badge>
      </Group>
    </Paper>
  )
}

export default CardStatsCustomer
