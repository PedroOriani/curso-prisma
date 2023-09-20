CREATE TABLE "posts" (
	"id" SERIAL PRIMARY KEY,
	"username" TEXT NOT NULL,
	"title" TEXT NOT NULL,
	"body" TEXT NOT NULL
)

ALTER TABLE posts ADD COLUMN "createAt" DATE DEFAULT NOW()
ALTER TABLE post RENAME COLUMN "body" to "content"