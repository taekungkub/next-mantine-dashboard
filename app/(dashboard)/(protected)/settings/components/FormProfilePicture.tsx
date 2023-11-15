"use client"
import { Avatar, Box, Button, FileInput, Group } from "@mantine/core"
import { useForm, zodResolver } from "@mantine/form"
import { IconFile } from "@tabler/icons-react"
import { useSession } from "next-auth/react"
import React, { useState } from "react"
import { z } from "zod"
import useToast from "@/hooks/useToast"

type Props = {}

export default function FormProfilePicture({}: Props) {
  const { data: session, status, update } = useSession()

  const schema = z.object({
    file: z.any().refine((file: File) => !!file, "Image is required"),
  })

  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      file: null as File | null,
    },
  })

  const toast = useToast()

  async function handleSubmit() {
    try {
      const formData = new FormData()
      formData.append("picture", form.values.file as File)
      const res = await fetch("/api/user/updatedprofilepicture", {
        method: "POST",
        body: formData,
      })

      const result = await res.json()

      toast.success("Upload picture success")
    } catch (error) {
      toast.error("Failed to upload")
    }
  }

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit())}>
      <FileInput variant="filled" radius="md" placeholder="Input File" leftSection={<IconFile />} {...form.getInputProps("file")} accept="image/png,image/jpeg" />
      <Box mt={"md"}>
        <Button variant={"subtle"}>Cancel</Button>
        <Button type="submit">Save</Button>
      </Box>
    </form>
  )
}
