export type Clipping = {
    source: string;
    meta: string;
    content: string;
    createdAt: Date;
};
export declare const parseClippings: (clippingsText: string) => Clipping[];
export declare const saveClippings: (clippingsString: string, userId: number) => Promise<import("@db/generated").Prisma.BatchPayload>;
