import { Group, Button, Box, Burger, Drawer, Collapse, ScrollArea, rem, useMantineTheme, Code, ActionIcon } from "@mantine/core"
import classes from "./HeaderMegaMenu.module.css"
import MenuDropdownProfile from "../MenuDropdownProfile/MenuDropdownProfile"
import ColorPickerSchema from "../ColorPickerSchema/ColorPickerSchema"
import { Logo } from "../NavbarNested/Logo"
import { useSession } from "next-auth/react"
import Link from "next/link"
import LanguagePicker from "../LanguagePicker/LanguagePicker"

interface Props {
  opened: boolean
  toggle: () => void
}

export default function HeaderMegaMenu({ opened, toggle }: Props) {
  const { data: session, status } = useSession()

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group justify="space-between" visibleFrom="sm">
            <Logo style={{ width: rem(120) }} />
            <Code fw={700}>v3.1.2</Code>
          </Group>

          <Burger size={"sm"} opened={opened} onClick={toggle} hiddenFrom="sm" />

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
    </Box>
  )
}
