import { Prisma, User } from '@prisma/client';
export declare const getUsers: () => Prisma.PrismaPromise<{
    id: number;
    name: string;
    telegramId: bigint | null;
    timezone: string;
}[]>;
export declare const createUser: (data: Prisma.UserCreateInput) => Prisma.Prisma__UserClient<{
    id: number;
    name: string;
    telegramId: bigint | null;
    timezone: string;
}, never, import("@prisma/client/runtime/library").DefaultArgs>;
export declare const getUserById: (id: number) => Prisma.Prisma__UserClient<{
    id: number;
    name: string;
    telegramId: bigint | null;
    timezone: string;
} | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
export declare const getUserByName: (name: string) => Prisma.Prisma__UserClient<{
    id: number;
    name: string;
    telegramId: bigint | null;
    timezone: string;
} | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
export declare const updateUser: (id: number, data: Partial<User>) => Prisma.Prisma__UserClient<{
    id: number;
    name: string;
    telegramId: bigint | null;
    timezone: string;
}, never, import("@prisma/client/runtime/library").DefaultArgs>;
export declare const getAllUsers: () => Prisma.PrismaPromise<{
    id: number;
    name: string;
    telegramId: bigint | null;
    timezone: string;
}[]>;
