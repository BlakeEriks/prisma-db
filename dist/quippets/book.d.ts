import { Prisma } from '@prisma/client';
export declare const getBooks: (userId: number) => Promise<({
    author: {
        id: number;
        name: string;
    };
    quotes: {
        id: number;
        createdAt: Date;
        meta: string | null;
        content: string;
        quotee: string | null;
        userId: number;
        deleted: boolean;
        bookId: number | null;
    }[];
} & {
    id: number;
    title: string;
    authorId: number;
    source: string | null;
})[]>;
export declare const saveBook: (book: Prisma.BookUncheckedCreateInput) => Promise<{
    id: number;
    title: string;
    authorId: number;
    source: string | null;
}>;
export type Books = Awaited<ReturnType<typeof getBooks>>;
