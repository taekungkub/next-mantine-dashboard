import prisma from "@/lib/prisma"
import { Prisma } from "@prisma/client"

type UserCreateBody = Prisma.Args<typeof prisma.user, "create">["data"]

// User Actions
export const getUsers = async () => await prisma.user.findMany()
export const getUserByEmail = async (email: string) => await prisma.user.findFirst({ where: { email: email } })
export const getUserById = async (id: number) => await prisma.user.findFirst({ where: { id: id } })
export const createUser = async (values: Record<string, any>) => await prisma.user.create({ data: Object.assign({ ...values }) })
export const deleteUserById = async (id: number) => await prisma.user.delete({ where: { id: id } })
export const updateUserById = async (id: number, values: UserCreateBody) => await prisma.user.update({ where: { id: id }, data: values })
export const updateProfilePicture = async (id: number, path: string) =>
  await prisma.user.update({
    where: { id: id },
    data: {
      profile_picture: path,
    },
  })
