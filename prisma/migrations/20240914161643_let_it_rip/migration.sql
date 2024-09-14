/*
  Warnings:

  - You are about to drop the `_QuoteToTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `authors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `books` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `quotes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_favorites` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[telegramId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `telegramId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "habits";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "quippets";

-- DropForeignKey
ALTER TABLE "public"."_QuoteToTag" DROP CONSTRAINT "_QuoteToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_QuoteToTag" DROP CONSTRAINT "_QuoteToTag_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."books" DROP CONSTRAINT "books_authorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."quotes" DROP CONSTRAINT "quotes_bookId_fkey";

-- DropForeignKey
ALTER TABLE "public"."quotes" DROP CONSTRAINT "quotes_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."user_favorites" DROP CONSTRAINT "user_favorites_quoteId_fkey";

-- DropForeignKey
ALTER TABLE "public"."user_favorites" DROP CONSTRAINT "user_favorites_userId_fkey";

-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "telegramId" BIGINT NOT NULL,
ADD COLUMN     "timezone" TEXT NOT NULL DEFAULT 'America/New_York';

-- DropTable
DROP TABLE "public"."_QuoteToTag";

-- DropTable
DROP TABLE "public"."authors";

-- DropTable
DROP TABLE "public"."books";

-- DropTable
DROP TABLE "public"."quotes";

-- DropTable
DROP TABLE "public"."tags";

-- DropTable
DROP TABLE "public"."user_favorites";

-- CreateTable
CREATE TABLE "quippets"."quotes" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "meta" TEXT,
    "content" TEXT NOT NULL,
    "quotee" TEXT,
    "userId" INTEGER NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "bookId" INTEGER,

    CONSTRAINT "quotes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quippets"."user_favorites" (
    "userId" INTEGER NOT NULL,
    "quoteId" INTEGER NOT NULL,

    CONSTRAINT "user_favorites_pkey" PRIMARY KEY ("userId","quoteId")
);

-- CreateTable
CREATE TABLE "quippets"."books" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "source" TEXT,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quippets"."authors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "authors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quippets"."tags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habits"."messages" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habits"."habits" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "dataType" TEXT NOT NULL,

    CONSTRAINT "habits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habits"."habit_logs" (
    "id" SERIAL NOT NULL,
    "habitId" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "habit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habits"."reminders" (
    "id" SERIAL NOT NULL,
    "habitId" INTEGER NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "reminders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quippets"."_QuoteToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "quotes_createdAt_key" ON "quippets"."quotes"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "books_title_key" ON "quippets"."books"("title");

-- CreateIndex
CREATE UNIQUE INDEX "authors_name_key" ON "quippets"."authors"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_key" ON "quippets"."tags"("name");

-- CreateIndex
CREATE UNIQUE INDEX "habit_logs_habitId_date_key" ON "habits"."habit_logs"("habitId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "reminders_habitId_time_key" ON "habits"."reminders"("habitId", "time");

-- CreateIndex
CREATE UNIQUE INDEX "_QuoteToTag_AB_unique" ON "quippets"."_QuoteToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_QuoteToTag_B_index" ON "quippets"."_QuoteToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "users_telegramId_key" ON "public"."users"("telegramId");

-- AddForeignKey
ALTER TABLE "quippets"."quotes" ADD CONSTRAINT "quotes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quippets"."quotes" ADD CONSTRAINT "quotes_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "quippets"."books"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quippets"."user_favorites" ADD CONSTRAINT "user_favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quippets"."user_favorites" ADD CONSTRAINT "user_favorites_quoteId_fkey" FOREIGN KEY ("quoteId") REFERENCES "quippets"."quotes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quippets"."books" ADD CONSTRAINT "books_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "quippets"."authors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habits"."messages" ADD CONSTRAINT "messages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habits"."habits" ADD CONSTRAINT "habits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habits"."habit_logs" ADD CONSTRAINT "habit_logs_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habits"."habits"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habits"."reminders" ADD CONSTRAINT "reminders_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habits"."habits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quippets"."_QuoteToTag" ADD CONSTRAINT "_QuoteToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "quippets"."quotes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quippets"."_QuoteToTag" ADD CONSTRAINT "_QuoteToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "quippets"."tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
