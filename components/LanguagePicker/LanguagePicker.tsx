import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Image, Avatar, Menu, Group } from "@mantine/core"

export default function LanguagePicker() {
  const langList = [
    {
      image: "https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg",
      title: "English",
    },
    {
      image: "https://tairo.cssninja.io/img/icons/flags/france.svg",
      title: "France",
    },
    {
      image: "https://tairo.cssninja.io/img/icons/flags/spain.svg",
      title: "Spain",
    },
  ]

  const items = langList.map((v, i) => {
    return (
      <Menu.Item key={i}>
        <Group>
          <Avatar size={"xs"} src={v.image} alt="it's me" />
          {v.title}
        </Group>
      </Menu.Item>
    )
  })
  return (
    <Menu position={"bottom-end"} transitionProps={{ transition: "pop" }}>
      <Menu.Target>
        <ActionIcon variant={"default"} size={"lg"}>
          <Avatar size={"xs"} src="https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg" alt="it's me" />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  )
}
