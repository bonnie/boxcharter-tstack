-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations

CREATE TABLE "keys" (
	"keycode" varchar(3) PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE "scale_notes" (
	"scalenoteid" serial PRIMARY KEY NOT NULL,
	"keycode" varchar(3),
	"notecode" varchar(2),
	"scaledegree" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "notes" (
	"notecode" varchar(2) PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE "charts" (
	"chartid" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"author" text,
	"composer" text,
	"lyricist" text,
	"lyricistsame" boolean,
	"originalkeycode" varchar(3),
	"printkeycode" varchar(3),
	"maxpages" integer,
	"minfontsize" integer,
	"pagewidth" real,
	"pageheight" real,
	"pageunits" text,
	"createdat" timestamp DEFAULT CURRENT_TIMESTAMP,
	"modifiedat" timestamp DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE "sections" (
	"sectionid" serial PRIMARY KEY NOT NULL,
	"chartid" integer NOT NULL,
	"index" integer NOT NULL,
	"sectionname" text,
	"sectiondesc" text,
	"beatspermeasure" integer NOT NULL,
	"versecount" integer NOT NULL,
	"pickupmeasurebeats" integer
);
--> statement-breakpoint
CREATE TABLE "measures" (
	"measureid" serial PRIMARY KEY NOT NULL,
	"sectionid" integer NOT NULL,
	"index" integer NOT NULL,
	"beatspermeasure" integer
);
--> statement-breakpoint
CREATE TABLE "repeats" (
	"repeatid" serial PRIMARY KEY NOT NULL,
	"sectionid" integer,
	"repeatstart" integer,
	"repeatend" integer,
	"ending1start" integer,
	"ending2start" integer,
	"ending2end" integer
);
--> statement-breakpoint
CREATE TABLE "chords" (
	"chordid" serial PRIMARY KEY NOT NULL,
	"measureid" integer NOT NULL,
	"beatindex" integer NOT NULL,
	"notecode" varchar(2) NOT NULL,
	"bassnotecode" varchar(2),
	"suffix" varchar(8)
);
--> statement-breakpoint
CREATE TABLE "lyrics" (
	"lyricid" serial PRIMARY KEY NOT NULL,
	"measureid" integer NOT NULL,
	"verseindex" integer NOT NULL,
	"lyrictext" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"userid" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"passwordhash" text NOT NULL,
	"passwordsalt" text NOT NULL,
	"firstname" text,
	"lastname" text,
	CONSTRAINT "users_email_key" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "usercharts" (
	"userchartid" serial PRIMARY KEY NOT NULL,
	"userid" integer NOT NULL,
	"chartid" integer NOT NULL,
	"permissions" integer
);
--> statement-breakpoint
ALTER TABLE "scale_notes" ADD CONSTRAINT "scale_notes_keycode_fkey" FOREIGN KEY ("keycode") REFERENCES "public"."keys"("keycode") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "scale_notes" ADD CONSTRAINT "scale_notes_notecode_fkey" FOREIGN KEY ("notecode") REFERENCES "public"."notes"("notecode") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "charts" ADD CONSTRAINT "charts_originalkeycode_fkey" FOREIGN KEY ("originalkeycode") REFERENCES "public"."keys"("keycode") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "charts" ADD CONSTRAINT "charts_printkeycode_fkey" FOREIGN KEY ("printkeycode") REFERENCES "public"."keys"("keycode") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sections" ADD CONSTRAINT "sections_chartid_fkey" FOREIGN KEY ("chartid") REFERENCES "public"."charts"("chartid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "measures" ADD CONSTRAINT "measures_sectionid_fkey" FOREIGN KEY ("sectionid") REFERENCES "public"."sections"("sectionid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "repeats" ADD CONSTRAINT "repeats_sectionid_fkey" FOREIGN KEY ("sectionid") REFERENCES "public"."sections"("sectionid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "repeats" ADD CONSTRAINT "repeats_repeatstart_fkey" FOREIGN KEY ("repeatstart") REFERENCES "public"."measures"("measureid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "repeats" ADD CONSTRAINT "repeats_repeatend_fkey" FOREIGN KEY ("repeatend") REFERENCES "public"."measures"("measureid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "repeats" ADD CONSTRAINT "repeats_ending1start_fkey" FOREIGN KEY ("ending1start") REFERENCES "public"."measures"("measureid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "repeats" ADD CONSTRAINT "repeats_ending2start_fkey" FOREIGN KEY ("ending2start") REFERENCES "public"."measures"("measureid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "repeats" ADD CONSTRAINT "repeats_ending2end_fkey" FOREIGN KEY ("ending2end") REFERENCES "public"."measures"("measureid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chords" ADD CONSTRAINT "chords_measureid_fkey" FOREIGN KEY ("measureid") REFERENCES "public"."measures"("measureid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chords" ADD CONSTRAINT "chords_notecode_fkey" FOREIGN KEY ("notecode") REFERENCES "public"."notes"("notecode") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chords" ADD CONSTRAINT "chords_bassnotecode_fkey" FOREIGN KEY ("bassnotecode") REFERENCES "public"."notes"("notecode") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lyrics" ADD CONSTRAINT "lyrics_measureid_fkey" FOREIGN KEY ("measureid") REFERENCES "public"."measures"("measureid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "usercharts" ADD CONSTRAINT "usercharts_userid_fkey" FOREIGN KEY ("userid") REFERENCES "public"."users"("userid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "usercharts" ADD CONSTRAINT "usercharts_chartid_fkey" FOREIGN KEY ("chartid") REFERENCES "public"."charts"("chartid") ON DELETE no action ON UPDATE no action;
