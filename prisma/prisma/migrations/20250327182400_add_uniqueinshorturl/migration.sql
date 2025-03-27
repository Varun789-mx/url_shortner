/*
  Warnings:

  - A unique constraint covering the columns `[short_url]` on the table `linkTable` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "linkTable_short_url_key" ON "linkTable"("short_url");
