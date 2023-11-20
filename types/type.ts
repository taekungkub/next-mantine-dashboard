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

export interface CustomerTy {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: Hair
  domain: string
  ip: string
  address: Address
  macAddress: string
  university: string
  bank: Bank
  company: Company
  ein: string
  ssn: string
  userAgent: string
}

interface Company {
  address: Address
  department: string
  name: string
  title: string
}

interface Bank {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}

interface Address {
  address: string
  city: string
  coordinates: Coordinates
  postalCode: string
  state: string
}

interface Coordinates {
  lat: number
  lng: number
}

interface Hair {
  color: string
  type: string
}
