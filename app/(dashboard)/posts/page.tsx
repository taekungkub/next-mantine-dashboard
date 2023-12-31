"use client"
import { Box, Button, Flex, Input, Paper, TextInput, Title } from "@mantine/core"
import { useForm } from "@mantine/form"
import { useSession } from "next-auth/react"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import usePosts from "@/hooks/usePosts"

export default function PostsPage() {
  const form = useForm({
    initialValues: {
      title: "",
      content: "",
    },
  })

  const { data: session } = useSession()
  const { usePostsQuery, onCreatePost, onDeletePost, onUpdatePost } = usePosts()
  const { data: posts, isLoading: isLoadingPosts } = usePostsQuery()

  const [isEdit, setIsEdit] = useState(false)
  const [idEdit, setIdEdit] = useState(0)
  const router = useRouter()

  function handleSubmit() {
    if (!isEdit) {
      onCreatePost({
        formData: {
          title: form.values.title,
          content: form.values.content,
          userId: Number(session?.user.id),
        },
      })
      form.setValues({ title: "", content: "" })
    } else {
      onUpdatePost({
        id: idEdit,
        formData: {
          title: form.values.title,
          content: form.values.content,
          userId: Number(session?.user.id),
        },
      })
      setIsEdit(false)
      form.setValues({ title: "", content: "" })
    }
  }

  const FormPost = (
    <>
      <Paper p={"md"} mt={20} withBorder>
        <form onSubmit={form.onSubmit((values) => handleSubmit())}>
          <TextInput label="Title" placeholder="Name" {...form.getInputProps("title")} required />
          <TextInput mt="md" label="Content" placeholder="Email" {...form.getInputProps("content")} required />
          {!isEdit && (
            <Button type="submit" mt={20}>
              Submit
            </Button>
          )}
          {isEdit && (
            <Button type="submit" mt={20} color="yellow">
              Edit
            </Button>
          )}
        </form>
      </Paper>
    </>
  )

  const PostItems = (
    <>
      {isLoadingPosts
        ? "Loading"
        : posts?.map((v) => (
            <Paper p={"md"} withBorder key={v.id} mt={"md"}>
              <Title order={4}>
                {v.id} {v.title}
              </Title>
              <Box>{v.content}</Box>

              <Box>
                <Button variant={"outline"} size="xs" mt={20} mr={10} onClick={() => router.push(`/posts/${v.id}`)}>
                  View
                </Button>
                <Button
                  variant={"outline"}
                  size="xs"
                  color="yellow"
                  mt={20}
                  mr={10}
                  onClick={() => {
                    form.setValues({ title: v.title, content: v.content })
                    setIdEdit(v.id)
                    setIsEdit(true)
                  }}
                >
                  Edit
                </Button>
                <Button variant={"outline"} size="xs" color="red" mt={20} onClick={() => onDeletePost(v.id)}>
                  Delete
                </Button>
              </Box>
            </Paper>
          ))}
    </>
  )
  return (
    <>
      <Box>
        <Flex justify={"end"}>
          <Button variant={"outline"}>Create Posts</Button>
        </Flex>
      </Box>
      {FormPost}
      <Box mt={20}>{PostItems}</Box>
    </>
  )
}
