import { Group, Button, Box, Burger, Drawer, Collapse, ScrollArea, rem, useMantineTheme, Code, ActionIcon } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import classes from "./HeaderMegaMenu.module.css"
import MenuDropdownProfile from "../MenuDropdownProfile/MenuDropdownProfile"
import ColorPickerSchema from "../ColorPickerSchema/ColorPickerSchema"
import { NavbarNested } from "../NavbarNested/NavbarNested"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { Logo } from "../NavbarNested/Logo"
import { useSession } from "next-auth/react"
import Link from "next/link"
import LanguagePicker from "../LanguagePicker/LanguagePicker"

export default function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
  const theme = useMantineTheme()

  const pathname = usePathname()

  const { data: session, status } = useSession()

  useEffect(() => {
    if (drawerOpened) {
      closeDrawer()
    }
  }, [pathname])

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group justify="space-between" visibleFrom="sm">
            <Logo style={{ width: rem(120) }} />
            <Code fw={700}>v3.1.2</Code>
          </Group>

          <Burger size={"sm"} opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />

          <Group>
            <LanguagePicker />
            <ColorPickerSchema />
            {status === "authenticated" ? (
              <MenuDropdownProfile />
            ) : (
              <Button component={Link} href={"/auth/signin"}>
                Signin
              </Button>
            )}
          </Group>
        </Group>
      </header>

      <Drawer opened={drawerOpened} onClose={closeDrawer} size="100%" padding="md" title="" hiddenFrom="sm" zIndex={1000000}>
        <NavbarNested />
      </Drawer>
    </Box>
  )
}
