"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.updateUser = exports.getUserByName = exports.getUserById = exports.createUser = exports.getUsers = void 0;
const prisma_1 = __importDefault(require("./prisma"));
const getUsers = () => prisma_1.default.user.findMany({});
exports.getUsers = getUsers;
const createUser = (data) => prisma_1.default.user.create({ data });
exports.createUser = createUser;
const getUserById = (id) => prisma_1.default.user.findUnique({ where: { id } });
exports.getUserById = getUserById;
const getUserByName = (name) => prisma_1.default.user.findFirst({ where: { name } });
exports.getUserByName = getUserByName;
const updateUser = (id, data) => prisma_1.default.user.update({
    where: { id },
    data,
});
exports.updateUser = updateUser;
const getAllUsers = () => prisma_1.default.user.findMany();
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=user.js.map