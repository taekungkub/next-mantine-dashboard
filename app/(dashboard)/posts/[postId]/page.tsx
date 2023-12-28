"use client"

import React, { useState } from "react"
import { useParams } from "next/navigation"
import { Box, Button, Flex, Text, Title } from "@mantine/core"
import { useSession } from "next-auth/react"
import ModalPost from "../../../../components/ModalPost"
import usePosts from "../../../../hooks/usePosts"

type Props = {}

export default function PostDetailPage({}: Props) {
  const { usePostQery, onDeletePost } = usePosts()

  const { postId } = useParams()

  const { data: postDetail, isLoading, isError } = usePostQery(Number(postId))
  const { data: session } = useSession()
  const [openEditModal, setOpenEditModal] = useState(false)

  if (isLoading) {
    return <div>Loading....</div>
  }

  if (isError) {
    return <div>Error....</div>
  }

  return (
    <Box>
      {!postDetail && "No data"}
      <Flex justify={"space-between"} align={"center"} gap={10}>
        <Text fz={14} c={"dimmed"}>
          {postDetail?.author?.name}
        </Text>
        {session?.user.id === postDetail?.authorId && (
          <Flex gap={10}>
            <Button color={"yellow"} variant={"outline"} onClick={() => setOpenEditModal(!openEditModal)}>
              Edit
            </Button>
            <Button color={"red"} variant={"outline"} onClick={() => onDeletePost(Number(postId))}>
              Delete
            </Button>
          </Flex>
        )}
      </Flex>
      <Title order={4}>{postDetail?.title}</Title>
      <Text>{postDetail?.content}</Text>
      <ModalPost opened={openEditModal} onClose={() => setOpenEditModal(false)} data={postDetail} />
    </Box>
  )
}
