CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" TEXT DEFAULT NULL,
	"email" TEXT,
	"password" TEXT,
	"disabled" BOOLEAN DEFAULT false
);

CREATE TABLE "tracker" (
	"id" SERIAL PRIMARY KEY,
	"food" BOOLEAN DEFAULT false,
	"meds" BOOLEAN DEFAULT false,
	"movement" BOOLEAN DEFAULT false,
	"pain" BOOLEAN DEFAULT false,
	"period" BOOLEAN DEFAULT false,
	"sleep" BOOLEAN DEFAULT false,
	"therapy" BOOLEAN DEFAULT false,
	"water" BOOLEAN DEFAULT false,
	"user_id" INT REFERENCES "user"
);

CREATE TABLE "chart" (
	"id" SERIAL PRIMARY KEY,
	"challenge" INT NOT NULL,
	"food" BOOLEAN DEFAULT NULL,
	"meds" BOOLEAN DEFAULT NULL,
	"mood" TEXT NOT NULL,
	"movement" TEXT DEFAULT NULL,
	"pain" TEXT DEFAULT NULL,
	"period" BOOLEAN DEFAULT NULL,
	"sleep" TEXT DEFAULT NULL,
	"therapy" BOOLEAN DEFAULT NULL,
	"thoughts" TEXT DEFAULT NULL,
	"water" BOOLEAN DEFAULT NULL,
	"user_id" INT REFERENCES "user"
);

INSERT INTO "user" (email, password)
VALUES ('qwe@gmail.com', 'qwee');

INSERT INTO "tracker" (food, sleep, user_id)
VALUES (true, true, 1);

INSERT INTO "chart" (challenge, food, mood, sleep, user_id)
VALUES (5, 'Yes', 'Meh', 'Great', 1);