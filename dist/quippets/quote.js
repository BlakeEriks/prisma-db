"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleQuotesByUser = exports.getQuoteById = exports.toggleFavorite = exports.getFavorites = exports.toggleDeleted = exports.saveQuote = exports.getQuotes = void 0;
const prisma_1 = __importDefault(require("@db/prisma"));
const lodash_1 = __importDefault(require("lodash"));
const getQuotes = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.quote.findMany({
        where: {
            userId,
            deleted: false,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
});
exports.getQuotes = getQuotes;
const saveQuote = (quote) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = quote, data = __rest(quote, ["id"]);
    const { update, create } = prisma_1.default.quote;
    return id ? update({ where: { id }, data }) : create({ data });
});
exports.saveQuote = saveQuote;
const toggleDeleted = (quoteId) => __awaiter(void 0, void 0, void 0, function* () {
    const quote = yield (0, exports.getQuoteById)(quoteId);
    if (!quote)
        throw new Error('Quote not found');
    return (0, exports.saveQuote)(Object.assign(Object.assign({}, quote), { deleted: !quote.deleted }));
});
exports.toggleDeleted = toggleDeleted;
const getFavorites = (userId) => prisma_1.default.userFavorite
    .findMany({
    select: {
        quoteId: true,
    },
    where: {
        userId,
    },
})
    .then(favorites => lodash_1.default.map(favorites, 'quoteId'));
exports.getFavorites = getFavorites;
const toggleFavorite = (userId, quoteId) => __awaiter(void 0, void 0, void 0, function* () {
    const favorite = yield prisma_1.default.userFavorite.findUnique({
        where: { userId_quoteId: { userId, quoteId } },
    });
    const removeFavorite = () => prisma_1.default.userFavorite.delete({
        where: { userId_quoteId: { userId, quoteId } },
    });
    const addFavorite = () => prisma_1.default.userFavorite.create({
        data: { userId, quoteId },
    });
    return (favorite ? removeFavorite : addFavorite)();
});
exports.toggleFavorite = toggleFavorite;
const getQuoteById = (quoteId) => prisma_1.default.quote.findUnique({ where: { id: quoteId } });
exports.getQuoteById = getQuoteById;
const sampleQuotesByUser = (userId, count) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.quote.findMany({
        where: { deleted: false, userId },
        take: count,
    });
});
exports.sampleQuotesByUser = sampleQuotesByUser;
//# sourceMappingURL=quote.js.map