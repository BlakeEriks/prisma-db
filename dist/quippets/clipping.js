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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveClippings = exports.parseClippings = void 0;
const prisma_1 = __importDefault(require("@db/prisma"));
const lodash_1 = __importDefault(require("lodash"));
const parseClippings = (clippingsText) => {
    const clippings = clippingsText
        .split('==========')
        .map(entry => entry.split(/\r?\n/).filter(data => data.length));
    const parsedClippings = [];
    for (const [source, meta, content] of clippings) {
        const parts = meta === null || meta === void 0 ? void 0 : meta.split(' | ');
        const inception = parts === null || parts === void 0 ? void 0 : parts.pop();
        const createdAt = inception && new Date(inception.replace('Added on ', ''));
        if (createdAt && content) {
            parsedClippings.push({ source, meta: parts === null || parts === void 0 ? void 0 : parts.join(' | '), content, createdAt });
        }
    }
    return parsedClippings;
};
exports.parseClippings = parseClippings;
// ex The 7 Habits of Highly Effective People (Covey, Stephen R.)
const parseSourceString = (sourceString) => {
    // ['The 7 Habits of Highly Effective People', 'Covey, Stephen R.)']
    const [title, author] = sourceString.split(' (');
    // Covey, Stephen R.
    let authorName = author.replace(')', '');
    if (authorName.includes(', ')) {
        // Stephen R. Covey
        authorName = authorName.split(', ').reverse().join(' ');
    }
    return { title, authorName };
};
const createBookWithAuthor = (sourceString) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, authorName } = parseSourceString(sourceString);
    return prisma_1.default.book.create({
        data: {
            source: sourceString,
            title,
            author: {
                connectOrCreate: {
                    create: {
                        name: authorName,
                    },
                    where: {
                        name: authorName,
                    },
                },
            },
        },
    });
});
const saveClippings = (clippingsString, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const clippings = (0, exports.parseClippings)(clippingsString);
    const allBooks = yield prisma_1.default.book.findMany();
    const sourceStrings = new Set(lodash_1.default.map(clippings, 'source'));
    const allQuotesCreatedAts = new Set(lodash_1.default.map(yield prisma_1.default.quote.findMany(), ({ createdAt }) => createdAt.toISOString()));
    // Create books from source strings if they don't yet exist
    for (const sourceString of Array.from(sourceStrings)) {
        // Skip if the book source string already exists
        if (allBooks.find(({ source }) => source === sourceString))
            continue;
        allBooks.push(yield createBookWithAuthor(sourceString));
    }
    // Filter out quotes that already exist
    const filteredQuotes = clippings.filter(({ createdAt }) => !allQuotesCreatedAts.has(createdAt.toISOString()));
    const createQuotesInput = filteredQuotes.map(({ createdAt, meta, content, source }) => ({
        createdAt: new Date(createdAt),
        meta,
        content,
        userId,
        bookId: lodash_1.default.find(allBooks, { source }).id,
    }));
    return prisma_1.default.quote.createMany({ data: createQuotesInput });
});
exports.saveClippings = saveClippings;
//# sourceMappingURL=clipping.js.map