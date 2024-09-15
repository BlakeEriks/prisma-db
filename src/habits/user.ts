import { User } from '@prisma/client'
import prisma from '~/prisma'

export const updateUser = (id: number, data: Partial<User>) =>
  prisma.user.update({
    where: { id },
    data,
  })

export const getAllUsers = () => prisma.user.findMany()
