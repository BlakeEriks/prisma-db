"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHabitLogsSince = exports.getLatestHabitLog = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const getLatestHabitLog = (userId) => prisma_1.default.habitLog.findFirst({
    where: { habit: { userId } },
    orderBy: { date: 'desc' },
});
exports.getLatestHabitLog = getLatestHabitLog;
const getHabitLogsSince = (userId, date) => prisma_1.default.habitLog.findMany({
    where: { habit: { userId }, date: { gte: date } },
});
exports.getHabitLogsSince = getHabitLogsSince;
//# sourceMappingURL=habitLog.js.map