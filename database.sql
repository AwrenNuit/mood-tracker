DROP TABLE "user";
DROP TABLE "tracker";
DROP TABLE "chart";

CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" TEXT DEFAULT NULL,
	"email" TEXT,
	"password" TEXT
);

CREATE TABLE "tracker" (
	"id" SERIAL PRIMARY KEY,
	"food" BOOLEAN DEFAULT true,
	"movement" BOOLEAN DEFAULT true,
	"sleep" BOOLEAN DEFAULT true,
	"therapy" BOOLEAN DEFAULT true,
	"user_id" INT REFERENCES "user"
);

CREATE TABLE "chart" (
	"id" SERIAL PRIMARY KEY,
	"mood" TEXT NOT NULL,
	"food" TEXT DEFAULT NULL,
	"movement" TEXT DEFAULT NULL,
	"sleep" TEXT DEFAULT NULL,
	"therapy" TEXT DEFAULT NULL,
	"user_id" INT REFERENCES "user"
);

INSERT INTO "user" (email, password)
VALUES ('qwe@gmail.com', 'qwee');

INSERT INTO "tracker" (user_id)
VALUES (1);

INSERT INTO "chart" (mood, food, sleep, user_id)
VALUES ('Meh', 'Yes', 'Great', 1);