export declare const getLatestHabitLog: (userId: number) => import("@db/generated").Prisma.Prisma__HabitLogClient<{
    id: number;
    habitId: number;
    date: Date;
    value: string;
} | null, null, import("@db/generated/runtime/library").DefaultArgs>;
export declare const getHabitLogsSince: (userId: number, date: Date) => import("@db/generated").Prisma.PrismaPromise<{
    id: number;
    habitId: number;
    date: Date;
    value: string;
}[]>;
