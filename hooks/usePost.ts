"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { PostTy } from "../types/type"
import useToast from "./useToast"
import { useParams, useRouter } from "next/navigation"

function usePost() {
  const toast = useToast()
  const queryClient = useQueryClient()

  const { postId } = useParams()
  const router = useRouter()

  const getPostFn = async (id: string) => {
    const res = await axios.get(`/api/posts/${id}`)
    return res.data.data
  }

  const deletePostFn = async (id: string) => {
    const res = await axios.delete(`/api/posts/${id}`)
    return res.data
  }

  interface FormPostTy {
    title: string
    content: string
    userId: number
  }

  const updatePostFn = async (id: string, { title, content, userId }: FormPostTy) => {
    const res = await axios.put(`/api/posts/${id}`, {
      title: title,
      content: content,
      userId: userId,
    })
    return res.data
  }

  const { data: postDetail, isLoading, isError } = useQuery<PostTy>(["post"], () => getPostFn(postId))

  const { mutate: deletePost } = useMutation(() => deletePostFn(postId), {
    onSuccess(data) {
      queryClient.invalidateQueries(["post"])
      toast.success("delete success")
      router.back()
    },
    onError(error: any) {
      toast.error("delete error")
    },
  })

  const { mutate: updatePost, status } = useMutation(({ formData }: { formData: FormPostTy }) => updatePostFn(postId, formData), {
    onSuccess(data) {
      queryClient.invalidateQueries(["post"])
      toast.success("update success")
    },
    onError(error: any) {
      toast.success("update error")
    },
  })

  return {
    postDetail,
    isLoading,
    isError,
    deletePost,
    updatePost,
    status,
  }
}

export default usePost
