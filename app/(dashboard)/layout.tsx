"use client"
import { useDisclosure } from "@mantine/hooks"
import { AppShell, Box, LoadingOverlay, rem } from "@mantine/core"
import { NavbarNested } from "@/components/NavbarNested/NavbarNested"
import HeaderMegaMenu from "@/components/HeaderMegaMenu/HeaderMegaMenu"
import { ChildrenProps } from "@/types/type"
import { useSession } from "next-auth/react"

export default function Demo({ children }: ChildrenProps) {
  const [opened, { toggle }] = useDisclosure()

  const { data: session, status } = useSession()

  return (
    <>
      <Box pos="relative">
        <LoadingOverlay visible={status === "loading"} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        <AppShell header={{ height: 60, offset: true }} navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }} padding={"md"}>
          <AppShell.Header>
            <HeaderMegaMenu />
          </AppShell.Header>
          <AppShell.Navbar>
            <NavbarNested />
          </AppShell.Navbar>
          <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
      </Box>
    </>
  )
}
