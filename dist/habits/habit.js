"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveHabitLogs = exports.deleteHabit = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const deleteHabit = (id) => prisma_1.default.habit.delete({
    where: { id },
});
exports.deleteHabit = deleteHabit;
const saveHabitLogs = (data) => Promise.all(data.map(log => prisma_1.default.habitLog.upsert({
    where: { habitId_date: { habitId: log.habitId, date: log.date } },
    update: {
        value: log.value,
    },
    create: log,
})));
exports.saveHabitLogs = saveHabitLogs;
//# sourceMappingURL=habit.js.map