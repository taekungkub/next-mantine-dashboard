import { IUser } from "./next-auth"

export interface ChildrenProps {
  children: React.ReactNode
}

export interface ProductTy {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: Array<string>
}

export interface UserTy {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
  roles: "user" | "admin"
}

export interface PostTy {
  id: number
  title: string
  content: string
  published: boolean
  author: IUser
  authorId: number
}
