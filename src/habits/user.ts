import prisma from '~/client'
import { User } from '~/generated/client'

export const updateUser = (id: number, data: Partial<User>) =>
  prisma.user.update({
    where: { id },
    data,
  })

export const getAllUsers = () => prisma.user.findMany()
