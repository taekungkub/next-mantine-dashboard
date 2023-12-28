import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { PostTy } from "../types/type"
import useToast from "./useToast"
import { FormPostTy, createPost, deletePost, getAllPosts, getPost, updatePost } from "../lib/post.services"

export default function usePosts() {
  const toast = useToast()
  const queryClient = useQueryClient()

  const usePostsQuery = () =>
    useQuery<PostTy[]>({
      queryKey: ["posts"],
      queryFn: () => getAllPosts(),
    })

  const usePostQery = (id: number) =>
    useQuery<PostTy>({
      queryKey: ["posts", id],
      queryFn: () => getPost(id),
    })

  const { mutate: onCreatePost } = useMutation({
    mutationFn: ({ formData }: { formData: FormPostTy }) => {
      return createPost({ ...formData })
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
      toast.success("Create success")
    },
    onError(error: any) {},
  })

  const { mutate: onDeletePost } = useMutation({
    mutationFn: (id: number) => {
      return deletePost(id)
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
      toast.success("Delete success")
    },
    onError(error: any) {},
  })

  const { mutate: onUpdatePost } = useMutation({
    mutationFn: ({ id, formData }: { id: number; formData: FormPostTy }) => {
      return updatePost(id, formData)
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
      toast.success("Update success")
    },
    onError(error: any) {},
  })

  const useUpdatePostDetail = () =>
    useMutation({
      mutationFn: ({ id, formData }: { id: number; formData: FormPostTy }) => {
        return updatePost(id, formData)
      },
      onSuccess(res) {
        queryClient.invalidateQueries({ queryKey: ["posts", res.data.id] })
        toast.success("Update success id: " + res.data.id)
      },
      onError(error: any) {},
    })

  return {
    usePostsQuery,
    usePostQery,
    onCreatePost,
    onUpdatePost,
    onDeletePost,
    useUpdatePostDetail,
  }
}
