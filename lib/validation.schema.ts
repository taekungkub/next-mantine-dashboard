import * as z from "zod"
import { regexStrongPassword } from "@/lib/utils"

const passwordStrongText = "Password must contain at least 8 characters, one uppercase, one number and one special case character"

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const signupSchema = z
  .object({
    email: z.string().email(),
    name: z.string().nonempty({ message: "Name cant empty" }),
    password: z.string().refine((value) => regexStrongPassword.test(value), passwordStrongText),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  })

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
})

export const resetPasswordSchema = z
  .object({
    password: z.string().refine((value) => regexStrongPassword.test(value), passwordStrongText),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  })

export const profileInfoSchema = z.object({
  fname: z.string().nonempty(),
  lname: z.string().nonempty(),
  location: z.string(),
  about: z.string(),
})

export const changePasswordSchema = z
  .object({
    oldPassword: z.string().nonempty(),
    newPassword: z.string().refine((value) => regexStrongPassword.test(value), passwordStrongText),
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    path: ["confirmNewPassword"],
    message: "Passwords don't match",
  })
