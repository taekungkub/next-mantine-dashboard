"use client"

import { MantineProvider } from "@mantine/core"
import { SessionProvider } from "next-auth/react"
import { theme } from "@/theme"
import { Notifications } from "@mantine/notifications"

import "@mantine/notifications/styles.css"
import { ModalsProvider } from "@mantine/modals"

import "mantine-datatable/styles.layer.css"
import "@/assets/css/MantineTable.css"

type Props = {
  children?: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <>
      <MantineProvider theme={theme}>
        <Notifications position="top-right" zIndex={1000} />
        <ModalsProvider>
          <SessionProvider>{children}</SessionProvider>
        </ModalsProvider>
      </MantineProvider>
    </>
  )
}
