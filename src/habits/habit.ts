import { Prisma } from '~/generated'
import prisma from '~/prisma'

export const deleteHabit = (id: number) =>
  prisma.habit.delete({
    where: { id },
  })

export const saveHabitLogs = (data: Prisma.HabitLogCreateManyInput[]) =>
  Promise.all(
    data.map(log =>
      prisma.habitLog.upsert({
        where: { habitId_date: { habitId: log.habitId, date: log.date } },
        update: {
          value: log.value,
        },
        create: log,
      })
    )
  )
