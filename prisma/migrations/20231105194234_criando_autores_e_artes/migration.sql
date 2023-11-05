-- CreateTable
CREATE TABLE "Authors" (
    "authorid" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "artwotk" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "artwotk_id_fkey" FOREIGN KEY ("id") REFERENCES "Authors" ("authorid") ON DELETE RESTRICT ON UPDATE CASCADE
);
