"use client"

import React, { useEffect, useState } from "react"
import usePost from "../../../../hooks/usePost"
import { useParams } from "next/navigation"
import { Box, Button, Flex, Text, Title } from "@mantine/core"
import { useSession } from "next-auth/react"
import ModalPost from "../../../../components/ModalPost"

type Props = {}

export default function PostDetailPage({}: Props) {
  const { postDetail, isLoading, isError, deletePost } = usePost()
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
        <Text fz={14} color={"dimmed"}>
          {postDetail?.author.name}
        </Text>
        {session?.user.id === postDetail?.authorId && (
          <Flex gap={10}>
            <Button color={"yellow"} variant={"outline"} onClick={() => setOpenEditModal(!openEditModal)}>
              Edit
            </Button>
            <Button color={"red"} variant={"outline"} onClick={() => deletePost()}>
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
