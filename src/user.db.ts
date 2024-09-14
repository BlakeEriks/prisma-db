import prisma from './client.db'
import { Prisma } from './generated/client'

export const getUsers = () => prisma.user.findMany({})

export const createUser = (data: Prisma.UserCreateInput) => prisma.user.create({ data })

export const getUserById = (id: number) => prisma.user.findUnique({ where: { id } })

export const getUserByName = (name: string) => prisma.user.findFirst({ where: { name } })
