export declare const getLatestHabitLog: (userId: number) => import(".prisma/client").Prisma.Prisma__HabitLogClient<{
    id: number;
    habitId: number;
    date: Date;
    value: string;
} | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
export declare const getHabitLogsSince: (userId: number, date: Date) => import(".prisma/client").Prisma.PrismaPromise<{
    id: number;
    habitId: number;
    date: Date;
    value: string;
}[]>;
