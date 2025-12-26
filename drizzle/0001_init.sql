ALTER TABLE "repeats" RENAME COLUMN "ending1start" TO "ending1Start";--> statement-breakpoint
ALTER TABLE "repeats" RENAME COLUMN "ending2start" TO "ending2Start";--> statement-breakpoint
ALTER TABLE "repeats" RENAME COLUMN "ending2end" TO "ending2End";--> statement-breakpoint
ALTER TABLE "repeats" DROP CONSTRAINT "repeats_ending1start_fkey";
--> statement-breakpoint
ALTER TABLE "repeats" DROP CONSTRAINT "repeats_ending2start_fkey";
--> statement-breakpoint
ALTER TABLE "repeats" DROP CONSTRAINT "repeats_ending2end_fkey";
--> statement-breakpoint
ALTER TABLE "lyrics" ADD COLUMN "placeAtEnd" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "repeats" ADD CONSTRAINT "repeats_ending1start_fkey" FOREIGN KEY ("ending1Start") REFERENCES "public"."measures"("measureid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "repeats" ADD CONSTRAINT "repeats_ending2start_fkey" FOREIGN KEY ("ending2Start") REFERENCES "public"."measures"("measureid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "repeats" ADD CONSTRAINT "repeats_ending2end_fkey" FOREIGN KEY ("ending2End") REFERENCES "public"."measures"("measureid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "keys" ADD CONSTRAINT "keycode_id" UNIQUE("keycode");--> statement-breakpoint
ALTER TABLE "scale_notes" ADD CONSTRAINT "keycode_notecode" UNIQUE("keycode","notecode");--> statement-breakpoint
ALTER TABLE "notes" ADD CONSTRAINT "notecode_id" UNIQUE("notecode");