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
	"challenge" TEXT NOT NULL,
	"date" DATE NOT NULL,
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

CREATE TABLE "quote" (
	"id" SERIAL PRIMARY KEY,
	"quote" TEXT,
	"source" TEXT
);

INSERT INTO "user" (email, password)
VALUES ('qwe@gmail.com', 'qwee');

INSERT INTO "tracker" (food, sleep, user_id)
VALUES (true, true, 1);

INSERT INTO "chart" (challenge, date, food, mood, sleep, user_id)
VALUES ('Harder', '2020-03-08', 'Yes', 'Meh', 'Great', 1);

INSERT INTO "quote" (quote, source)
VALUES
('Each morning we are born again. What we do today is what matters most.', '-Buddha'),
('You, yourself, as much as anybody in the entire universe, deserve your love and affection.', '-Buddha'),
('Holding onto anger is like drinking poison and expecting the other person to die.', '-Buddha'),
('There are only two mistakes one can make along the road to truth; not going all the way, and not starting.', '-Buddha'),
('If we could see the miracle of a single flower clearly, our whole life would change.', '-Buddha'),
('Stop acting so small. You are the universe in ecstatic motion.', '-Rumi'),
('The wound is the place where the light enters you.', '-Rumi'),
('Don’t be satisfied with stories, how things have gone with others. Unfold your own myth.', '-Rumi'),
('Raise your words, not voice. It is rain that grows flowers, not thunder.', '-Rumi'),
('Your heart is the size of an ocean. Go find yourself in its hidden depths.', '-Rumi');