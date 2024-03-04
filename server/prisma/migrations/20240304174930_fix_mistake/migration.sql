/*
  Warnings:

  - You are about to drop the column `genge` on the `Hero` table. All the data in the column will be lost.
  - Added the required column `genre` to the `Hero` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hero" DROP COLUMN "genge",
ADD COLUMN     "genre" TEXT NOT NULL;
