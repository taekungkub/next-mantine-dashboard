import axios from "axios"
import { PostTy } from "../types/type"

export interface FormPostTy {
  title: string
  content: string
  userId: number
}

export const getAllPosts = async () => {
  const res = await axios.get("/api/posts")
  return res.data.data
}

export const getPost = async (id: number) => {
  const res = await axios.get<{
    data: PostTy
  }>(`/api/posts/${id}`)
  return res.data.data
}

export const deletePost = async (id: number) => {
  const res = await axios.delete(`/api/posts/${id}`)
  return res.data
}

export const createPost = async ({ title, content, userId }: FormPostTy) => {
  const res = await axios.post(`/api/posts`, {
    title: title,
    content: content,
    userId: userId,
  })
  return res.data
}

export const updatePost = async (id: number, { title, content, userId }: FormPostTy) => {
  const res = await axios.put<{ data: PostTy }>(`/api/posts/${id}`, {
    title: title,
    content: content,
    userId: userId,
  })
  return res.data
}
