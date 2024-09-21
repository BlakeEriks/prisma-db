import { Prisma } from '@prisma/client';
export declare const getQuotes: (userId: number) => Promise<{
    id: number;
    createdAt: Date;
    meta: string | null;
    content: string;
    quotee: string | null;
    userId: number;
    deleted: boolean;
    bookId: number | null;
}[]>;
export declare const saveQuote: (quote: Prisma.QuoteUncheckedCreateInput) => Promise<{
    id: number;
    createdAt: Date;
    meta: string | null;
    content: string;
    quotee: string | null;
    userId: number;
    deleted: boolean;
    bookId: number | null;
}>;
export declare const toggleDeleted: (quoteId: number) => Promise<{
    id: number;
    createdAt: Date;
    meta: string | null;
    content: string;
    quotee: string | null;
    userId: number;
    deleted: boolean;
    bookId: number | null;
}>;
export declare const getFavorites: (userId: number) => Promise<number[]>;
export declare const toggleFavorite: (userId: number, quoteId: number) => Promise<{
    userId: number;
    quoteId: number;
}>;
export declare const getQuoteById: (quoteId: number) => import("@db/generated").Prisma.Prisma__QuoteClient<{
    id: number;
    createdAt: Date;
    meta: string | null;
    content: string;
    quotee: string | null;
    userId: number;
    deleted: boolean;
    bookId: number | null;
} | null, null, import("@db/generated/runtime/library").DefaultArgs>;
export declare const sampleQuotesByUser: (userId: number, count: number) => Promise<{
    id: number;
    createdAt: Date;
    meta: string | null;
    content: string;
    quotee: string | null;
    userId: number;
    deleted: boolean;
    bookId: number | null;
}[]>;
