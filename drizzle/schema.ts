import { pgTable, varchar, foreignKey, serial, integer, text, boolean, real, timestamp, unique } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const keys = pgTable("keys", {
	keycode: varchar({ length: 3 }).primaryKey().notNull(),
});

export const scaleNotes = pgTable("scale_notes", {
	scalenoteid: serial().primaryKey().notNull(),
	keycode: varchar({ length: 3 }),
	notecode: varchar({ length: 2 }),
	scaledegree: integer().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.keycode],
			foreignColumns: [keys.keycode],
			name: "scale_notes_keycode_fkey"
		}),
	foreignKey({
			columns: [table.notecode],
			foreignColumns: [notes.notecode],
			name: "scale_notes_notecode_fkey"
		}),
]);

export const notes = pgTable("notes", {
	notecode: varchar({ length: 2 }).primaryKey().notNull(),
});

export const charts = pgTable("charts", {
	chartid: serial().primaryKey().notNull(),
	title: text().notNull(),
	author: text(),
	composer: text(),
	lyricist: text(),
	lyricistsame: boolean(),
	originalkeycode: varchar({ length: 3 }),
	printkeycode: varchar({ length: 3 }),
	maxpages: integer(),
	minfontsize: integer(),
	pagewidth: real(),
	pageheight: real(),
	pageunits: text(),
	createdat: timestamp({ mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	modifiedat: timestamp({ mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
	foreignKey({
			columns: [table.originalkeycode],
			foreignColumns: [keys.keycode],
			name: "charts_originalkeycode_fkey"
		}),
	foreignKey({
			columns: [table.printkeycode],
			foreignColumns: [keys.keycode],
			name: "charts_printkeycode_fkey"
		}),
]);

export const sections = pgTable("sections", {
	sectionid: serial().primaryKey().notNull(),
	chartid: integer().notNull(),
	index: integer().notNull(),
	sectionname: text(),
	sectiondesc: text(),
	beatspermeasure: integer().notNull(),
	versecount: integer().notNull(),
	pickupmeasurebeats: integer(),
}, (table) => [
	foreignKey({
			columns: [table.chartid],
			foreignColumns: [charts.chartid],
			name: "sections_chartid_fkey"
		}),
]);

export const measures = pgTable("measures", {
	measureid: serial().primaryKey().notNull(),
	sectionid: integer().notNull(),
	index: integer().notNull(),
	beatspermeasure: integer(),
}, (table) => [
	foreignKey({
			columns: [table.sectionid],
			foreignColumns: [sections.sectionid],
			name: "measures_sectionid_fkey"
		}),
]);

export const repeats = pgTable("repeats", {
	repeatid: serial().primaryKey().notNull(),
	sectionid: integer(),
	repeatstart: integer(),
	repeatend: integer(),
	ending1Start: integer(),
	ending2Start: integer(),
	ending2End: integer(),
}, (table) => [
	foreignKey({
			columns: [table.sectionid],
			foreignColumns: [sections.sectionid],
			name: "repeats_sectionid_fkey"
		}),
	foreignKey({
			columns: [table.repeatstart],
			foreignColumns: [measures.measureid],
			name: "repeats_repeatstart_fkey"
		}),
	foreignKey({
			columns: [table.repeatend],
			foreignColumns: [measures.measureid],
			name: "repeats_repeatend_fkey"
		}),
	foreignKey({
			columns: [table.ending1Start],
			foreignColumns: [measures.measureid],
			name: "repeats_ending1start_fkey"
		}),
	foreignKey({
			columns: [table.ending2Start],
			foreignColumns: [measures.measureid],
			name: "repeats_ending2start_fkey"
		}),
	foreignKey({
			columns: [table.ending2End],
			foreignColumns: [measures.measureid],
			name: "repeats_ending2end_fkey"
		}),
]);

export const chords = pgTable("chords", {
	chordid: serial().primaryKey().notNull(),
	measureid: integer().notNull(),
	beatindex: integer().notNull(),
	notecode: varchar({ length: 2 }).notNull(),
	bassnotecode: varchar({ length: 2 }),
	suffix: varchar({ length: 8 }),
}, (table) => [
	foreignKey({
			columns: [table.measureid],
			foreignColumns: [measures.measureid],
			name: "chords_measureid_fkey"
		}),
	foreignKey({
			columns: [table.notecode],
			foreignColumns: [notes.notecode],
			name: "chords_notecode_fkey"
		}),
	foreignKey({
			columns: [table.bassnotecode],
			foreignColumns: [notes.notecode],
			name: "chords_bassnotecode_fkey"
		}),
]);

export const lyrics = pgTable("lyrics", {
	lyricid: serial().primaryKey().notNull(),
	measureid: integer().notNull(),
	verseindex: integer().notNull(),
	lyrictext: text().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.measureid],
			foreignColumns: [measures.measureid],
			name: "lyrics_measureid_fkey"
		}),
]);

export const users = pgTable("users", {
	userid: serial().primaryKey().notNull(),
	email: text().notNull(),
	passwordhash: text().notNull(),
	passwordsalt: text().notNull(),
	firstname: text(),
	lastname: text(),
}, (table) => [
	unique("users_email_key").on(table.email),
]);

export const usercharts = pgTable("usercharts", {
	userchartid: serial().primaryKey().notNull(),
	userid: integer().notNull(),
	chartid: integer().notNull(),
	permissions: integer(),
}, (table) => [
	foreignKey({
			columns: [table.userid],
			foreignColumns: [users.userid],
			name: "usercharts_userid_fkey"
		}),
	foreignKey({
			columns: [table.chartid],
			foreignColumns: [charts.chartid],
			name: "usercharts_chartid_fkey"
		}),
]);
