"use client"
import { Box, Grid, Paper, Switch, Text, TextInput } from "@mantine/core"
import { useState } from "react"
import { FormNotification } from "./components/FormNotification"
import PageTitle from "@/components/PageTitle"
import MenuSettings from "./components/MenuSettings/MenuSettings"
import { motion } from "framer-motion"
import FormProfileInfo from "./components/FormProfileInfo"
import FormProfilePicture from "./components/FormProfilePicture"
import { IconPhone } from "@tabler/icons-react"
import FormChangePassword from "./components/FormChangePassword"

function SecuritySection() {
  const [checked, setChecked] = useState(false)
  return (
    <>
      <Paper withBorder p={"xl"}>
        <PageTitle title="Security " subtitle="Edit your security"></PageTitle>

        <Box p={"lg"}>
          <Text fz="md" fw={500}>
            2 Factor Auth
          </Text>
          <Text fz="xs" c="dimmed" mt={3} mb="sm">
            Two factor authentication
          </Text>
          <Switch checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} label="Enabled" description="Toggle 2 factor authentication" />

          {checked && <TextInput placeholder="Phone Number" leftSection={<IconPhone />} mt={"md"} />}
        </Box>
      </Paper>
    </>
  )
}

function GeneralSection() {
  return (
    <>
      <Paper withBorder p={"xl"}>
        <PageTitle title="General" subtitle="Edit your account prefs and settings"></PageTitle>
        <Box p={"lg"}>
          <Text fz="md" fw={500}>
            Profile Picture
          </Text>
          <Text fz="xs" c="dimmed" mt={3} mb="sm">
            This is how others will recognize you
          </Text>
          <FormProfilePicture />

          <Text fz="md" fw={500} mt={"xl"}>
            Profile Info
          </Text>
          <Text fz="xs" c="dimmed" mt={3} mb="sm">
            Others diserve to know you more
          </Text>
          <FormProfileInfo />
        </Box>
      </Paper>
    </>
  )
}

function SettingSection() {
  return (
    <>
      <Paper withBorder p={"xl"}>
        <PageTitle title="SETTINGS" subtitle="Edit your account prefs and settings"></PageTitle>

        <Box mt={"lg"}>
          <FormChangePassword />
          <Box mt={"md"}>
            <FormNotification />
          </Box>
        </Box>
      </Paper>
    </>
  )
}

export default function Page() {
  const [tab, setTab] = useState("general")

  return (
    <>
      <Grid>
        <Grid.Col span={{ base: 12, md: 3 }}>
          <MenuSettings tab={tab} setTab={(tab) => setTab(tab)} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 9 }}>
          {tab === "general" && (
            <motion.div initial={{ y: 150, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <GeneralSection />
            </motion.div>
          )}
          {tab === "security" && (
            <motion.div initial={{ y: 150, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <SecuritySection />
            </motion.div>
          )}

          {tab === "setting" && (
            <motion.div initial={{ y: 150, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <SettingSection />
            </motion.div>
          )}
        </Grid.Col>
      </Grid>
    </>
  )
}
