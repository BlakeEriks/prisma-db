-- DropIndex
DROP INDEX "public"."users_telegramId_key";

-- AlterTable
ALTER TABLE "public"."users" ALTER COLUMN "telegramId" DROP NOT NULL;
