import { Prisma, User } from './generated'
import prisma from './prisma'

export const getUsers = () => prisma.user.findMany({})

export const createUser = (data: Prisma.UserCreateInput) => prisma.user.create({ data })

export const getUserById = (id: number) => prisma.user.findUnique({ where: { id } })

export const getUserByName = (name: string) => prisma.user.findFirst({ where: { name } })

export const updateUser = (id: number, data: Partial<User>) =>
  prisma.user.update({
    where: { id },
    data,
  })

export const getAllUsers = () => prisma.user.findMany()
