import { Prisma } from '@db/generated';
export declare const deleteHabit: (id: number) => Prisma.Prisma__HabitClient<{
    id: number;
    userId: number;
    name: string;
    dataType: string;
}, never, import("@db/generated/runtime/library").DefaultArgs>;
export declare const saveHabitLogs: (data: Prisma.HabitLogCreateManyInput[]) => Promise<{
    id: number;
    habitId: number;
    date: Date;
    value: string;
}[]>;
