import { Prisma, User } from '@prisma/client';
export declare const getUsers: () => import("@db/generated").Prisma.PrismaPromise<{
    id: number;
    name: string;
    telegramId: bigint | null;
    timezone: string;
}[]>;
export declare const createUser: (data: Prisma.UserCreateInput) => import("@db/generated").Prisma.Prisma__UserClient<{
    id: number;
    name: string;
    telegramId: bigint | null;
    timezone: string;
}, never, import("@db/generated/runtime/library").DefaultArgs>;
export declare const getUserById: (id: number) => import("@db/generated").Prisma.Prisma__UserClient<{
    id: number;
    name: string;
    telegramId: bigint | null;
    timezone: string;
} | null, null, import("@db/generated/runtime/library").DefaultArgs>;
export declare const getUserByName: (name: string) => import("@db/generated").Prisma.Prisma__UserClient<{
    id: number;
    name: string;
    telegramId: bigint | null;
    timezone: string;
} | null, null, import("@db/generated/runtime/library").DefaultArgs>;
export declare const updateUser: (id: number, data: Partial<User>) => import("@db/generated").Prisma.Prisma__UserClient<{
    id: number;
    name: string;
    telegramId: bigint | null;
    timezone: string;
}, never, import("@db/generated/runtime/library").DefaultArgs>;
export declare const getAllUsers: () => import("@db/generated").Prisma.PrismaPromise<{
    id: number;
    name: string;
    telegramId: bigint | null;
    timezone: string;
}[]>;
