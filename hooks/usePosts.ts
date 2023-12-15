import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { PostTy } from "../types/type"
import useToast from "./useToast"
import { useSession } from "next-auth/react"
import { queryKey } from "../constant/query"

function usePosts() {
  const toast = useToast()
  const queryClient = useQueryClient()

  const getAllPostsFn = async () => {
    const res = await axios.get("/api/posts")
    return res.data.data
  }

  const deletePostFn = async (id: number) => {
    const res = await axios.delete(`/api/posts/${id}`)
    return res.data
  }

  interface FormPostTy {
    title: string
    content: string
    userId: number
  }

  const createPostFn = async ({ title, content, userId }: FormPostTy) => {
    const res = await axios.post(`/api/posts`, {
      title: title,
      content: content,
      userId: userId,
    })
    return res.data
  }

  const updatePostFn = async (id: number, { title, content, userId }: FormPostTy) => {
    const res = await axios.put(`/api/posts/${id}`, {
      title: title,
      content: content,
      userId: userId,
    })
    return res.data
  }

  const { data, isLoading } = useQuery<PostTy[]>({
    queryKey: ["post"],
    queryFn: () => getAllPostsFn(),
  })

  const { mutate: createPosts } = useMutation(({ formData }: { formData: FormPostTy }) => createPostFn({ ...formData }), {
    onSuccess(data) {
      queryClient.invalidateQueries(["posts"])
      toast.success("create success")
    },
    onError(error: any) {},
  })

  const { mutate: deletePost } = useMutation((id: number) => deletePostFn(id), {
    onSuccess(data) {
      queryClient.invalidateQueries(["posts"])
      toast.success("delete success")
    },
    onError(error: any) {},
  })

  const { mutate: updatePost } = useMutation(({ id, formData }: { id: number; formData: FormPostTy }) => updatePostFn(id, formData), {
    onSuccess(data) {
      queryClient.invalidateQueries(["posts"])
      toast.success("update success")
    },
    onError(error: any) {},
  })
  return {
    data,
    isLoading,
    deletePost,
    createPosts,
    updatePost,
  }
}

export default usePosts
