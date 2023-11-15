// nextauth.d.ts
import { DefaultSession, DefaultUser } from "next-auth"
// Define a role enum
export enum Role {
  user = "user",
  admin = "admin",
  superadmin = "superadmin",
}
// common interface for JWT and Session
export interface IUser extends DefaultUser {
  id: number
  name: string
  email: string
  role?: Role
  profile_picture?: string
}
declare module "next-auth" {
  interface User extends IUser {}
  interface Session {
    user: IUser
  }
}
declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}
