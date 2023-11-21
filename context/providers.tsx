"use client"

import { MantineProvider } from "@mantine/core"
import { SessionProvider } from "next-auth/react"
import { theme } from "@/styles/theme"
import { Notifications } from "@mantine/notifications"

import "@mantine/notifications/styles.css"
import { ModalsProvider } from "@mantine/modals"

import "mantine-datatable/styles.layer.css"
import "@/assets/css/MantineTable.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PropsWithChildren } from "react"
import React from "react"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental"

export const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <>
      <MantineProvider theme={theme}>
        <Notifications position="top-right" zIndex={1000} />
        <ModalsProvider>
          <SessionProvider>
            <QueryClientProvider client={queryClient}>
              <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
              {<ReactQueryDevtools initialIsOpen={false} />}
            </QueryClientProvider>
          </SessionProvider>
        </ModalsProvider>
      </MantineProvider>
    </>
  )
}
