import { Menu, Group, Text, Avatar, ActionIcon } from "@mantine/core"
import { IconSettings, IconTrash, IconLogin } from "@tabler/icons-react"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

export default function MenuDropdownProfile() {
  const router = useRouter()
  const { data: session, status } = useSession()

  return (
    <div>
      <Group p="center">
        <Menu withArrow width={200} position={"bottom-end"} transitionProps={{ transition: "pop" }}>
          <Menu.Target>
            <ActionIcon variant={"transparent"} size={"sm"}>
              <Avatar size={32} src={"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"} radius={"lg"} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item onClick={() => router.push("/profile")}>
              <Group>
                <div>
                  <Text>Kieattisak Suparit</Text>
                  <Text size="xs" c="dimmed">
                    taekungkub16@gmail.com
                  </Text>
                </div>
              </Group>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Label>Settings</Menu.Label>
            <Menu.Item leftSection={<IconSettings size="0.9rem" stroke={1.5} />} onClick={() => router.push("/settings")}>
              Account settings
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item color="red" leftSection={<IconTrash size="0.9rem" stroke={1.5} />} onClick={() => signOut()}>
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </div>
  )
}
