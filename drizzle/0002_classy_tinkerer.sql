ALTER TABLE "keys" DROP CONSTRAINT "keycode_id";--> statement-breakpoint
ALTER TABLE "notes" DROP CONSTRAINT "notecode_id";--> statement-breakpoint
ALTER TABLE "keys" ADD CONSTRAINT "keys_keycode_unique" UNIQUE("keycode");--> statement-breakpoint
ALTER TABLE "notes" ADD CONSTRAINT "notes_notecode_unique" UNIQUE("notecode");