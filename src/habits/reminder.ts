import prisma from '../prisma'

type CreateReminder = {
  habitId: number
  time: string
}

export const createReminder = async ({ habitId, time }: CreateReminder) =>
  prisma.reminder.create({ data: { habitId, time } })
