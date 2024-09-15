import { User } from '~/generated'
import prisma from '~/prisma'

export const updateUser = (id: number, data: Partial<User>) =>
  prisma.user.update({
    where: { id },
    data,
  })

export const getAllUsers = () => prisma.user.findMany()
