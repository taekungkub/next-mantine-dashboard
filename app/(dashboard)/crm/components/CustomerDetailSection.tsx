"use client"
import React from "react"
import { CustomerTy } from "@/types/type"
import { Avatar, Box, Flex, Grid, Group, Paper, SimpleGrid, Text } from "@mantine/core"

type Props = {
  data: CustomerTy
}

export default function CustomerDetailSection({ data }: Props) {
  return (
    <div>
      <Grid>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper p={"md"}>
            <Group justify={"center"}>
              <Avatar src={data.image} size={"5rem"} radius={"999px"} bg="gray.2"></Avatar>
            </Group>

            <Text ta={"center"} mt={"md"}>
              {data.firstName} {data.lastName}
            </Text>

            <Flex direction={"column"} gap={"md"}>
              <Box>
                <Text c={"dimmed"} fz={"xs"}>
                  Email
                </Text>
                <Text>{data.email}</Text>
              </Box>

              <Box>
                <Text c={"dimmed"} fz={"xs"}>
                  Phone
                </Text>
                <Text>{data.phone}</Text>
              </Box>
              <Box>
                <Text c={"dimmed"} fz={"xs"}>
                  Address
                </Text>

                <Text>{data.address.address}</Text>
              </Box>

              <Box>
                <Text c={"dimmed"} fz={"xs"}>
                  Date of birth
                </Text>
                <Text>{data.birthDate}</Text>
              </Box>
            </Flex>
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Text fw={"bold"}>Title</Text>

          <Paper p={"md"} mt={"md"}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, modi laudantium? Pariatur sed voluptatem obcaecati? Reiciendis sunt illo distinctio, reprehenderit consequatur, beatae perspiciatis voluptatibus temporibus officiis,
              eaque ducimus repellendus a!
            </Text>
          </Paper>

          <Text fw={"bold"} mt={"md"}>
            Title
          </Text>

          <Paper p={"md"} mt={"md"}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, modi laudantium? Pariatur sed voluptatem obcaecati? Reiciendis sunt illo distinctio, reprehenderit consequatur, beatae perspiciatis voluptatibus temporibus officiis,
              eaque ducimus repellendus a!
            </Text>
          </Paper>

          <Text fw={"bold"} mt={"md"}>
            Title
          </Text>

          <Paper p={"md"} mt={"md"}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, modi laudantium? Pariatur sed voluptatem obcaecati? Reiciendis sunt illo distinctio, reprehenderit consequatur, beatae perspiciatis voluptatibus temporibus officiis,
              eaque ducimus repellendus a!
            </Text>
          </Paper>
        </Grid.Col>
      </Grid>
    </div>
  )
}
