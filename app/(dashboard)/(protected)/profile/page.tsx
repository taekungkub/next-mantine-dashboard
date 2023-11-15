"use client"

import { Box, Card, Container, Divider, Grid, Paper, SimpleGrid, Text, Title } from "@mantine/core"
import { AboutSection, ToolSection, UserInfoAction } from "./components/UserInfoAction"

export default function ProfilePage() {
  return (
    <Container>
      <UserInfoAction />

      <Grid grow gutter={"sm"} mt={"xl"}>
        <Grid.Col span={{ base: 12, xs: 8 }}>
          <AboutSection />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Paper withBorder p={"xl"}>
            <Title order={6} c={"dimmed"}>
              TOOLS
            </Title>
            <ToolSection />
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  )
}
