type CreateReminder = {
    habitId: number;
    time: string;
};
export declare const createReminder: ({ habitId, time }: CreateReminder) => Promise<{
    id: number;
    habitId: number;
    time: string;
}>;
export {};
