import { Button, Modal, Paper, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import React, { useEffect } from "react"
import { PostTy } from "../types/type"
import usePosts from "../hooks/usePosts"

type Props = {
  opened: boolean
  onOpen?(): void
  onClose: () => void
  data?: PostTy
}

export default function ModalPost({ opened, onClose, onOpen, data }: Props) {
  const { useUpdatePostDetail } = usePosts()

  const { mutate: onUpdatePost, status } = useUpdatePostDetail()

  const form = useForm({
    initialValues: {
      title: "",
      content: "",
    },
  })

  function handleSubmit() {
    if (!data) return
    onUpdatePost({
      id: data.id,
      formData: {
        title: form.values.title,
        content: form.values.content,
        userId: data.authorId,
      },
    })
  }

  useEffect(() => {
    if (opened) {
      form.setValues({ title: data?.title, content: data?.content })
    }
  }, [opened])

  useEffect(() => {
    if (status === "success") {
      onClose()
    }
  }, [status])

  return (
    <div>
      <Modal opened={opened} onClose={() => onClose()} title="Authentication">
        <form onSubmit={form.onSubmit((values) => handleSubmit())}>
          <TextInput label="Title" placeholder="Name" {...form.getInputProps("title")} required />
          <TextInput mt="md" label="Content" placeholder="Email" {...form.getInputProps("content")} required />
          <Button type="submit" mt={20} color="yellow">
            Edit
          </Button>
        </form>
      </Modal>
    </div>
  )
}
