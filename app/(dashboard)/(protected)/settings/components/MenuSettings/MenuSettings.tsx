"use client"
import React from "react"
import classes from "./MenuSettings.module.css"
import { Card, Flex, Group, Text, rem } from "@mantine/core"
import { IconLockAccess, IconSettings, IconUser } from "@tabler/icons-react"

type Props = {
  tab: string
  setTab: (tab: string) => void
}

export default function MenuSettings({ tab, setTab }: Props) {
  return (
    <Flex direction={"column"}>
      <Group wrap={"nowrap"} py={"xs"} px={"md"} className={classes.menu} data-active={tab === "general" || undefined} onClick={() => setTab("general")}>
        <IconUser style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        <Text fz={"sm"}>General</Text>
      </Group>
      <Group wrap={"nowrap"} py={"xs"} px={"md"} className={classes.menu} data-active={tab === "security" || undefined} onClick={() => setTab("security")}>
        <IconLockAccess style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        <Text fz={"sm"}>Security</Text>
      </Group>
      <Group wrap={"nowrap"} py={"xs"} px={"md"} className={classes.menu} data-active={tab === "setting" || undefined} onClick={() => setTab("setting")}>
        <IconSettings style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        <Text fz={"sm"}>Settings</Text>
      </Group>
    </Flex>
  )
}
