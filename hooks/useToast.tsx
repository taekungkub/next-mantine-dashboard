import { Icon, IconCheck, IconX } from "@tabler/icons-react"
import { notifications } from "@mantine/notifications"

export default function useToast() {
  function success(label = "Successfully", desc = "") {
    notifications.show({
      title: label,
      message: desc,
      color: "teal",
    })
  }

  function error(label = "Error", desc?: string) {
    notifications.show({
      title: label,
      message: desc,
      color: "red",
    })
  }
  return {
    success,
    error,
  }
}
