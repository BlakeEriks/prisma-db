import { Prisma } from '@prisma/client';
export declare const deleteHabit: (id: number) => Prisma.Prisma__HabitClient<{
    id: number;
    userId: number;
    name: string;
    dataType: string;
}, never, import("@prisma/client/runtime/library").DefaultArgs>;
export declare const saveHabitLogs: (data: Prisma.HabitLogCreateManyInput[]) => Promise<{
    id: number;
    habitId: number;
    date: Date;
    value: string;
}[]>;
