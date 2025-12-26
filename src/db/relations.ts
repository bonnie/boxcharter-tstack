import { relations } from "drizzle-orm/relations";
import {
	charts,
	chords,
	keys,
	lyrics,
	measures,
	notes,
	repeats,
	scaleNotes,
	sections,
	usercharts,
	users,
} from "./schema";

export const scaleNotesRelations = relations(scaleNotes, ({ one }) => ({
	key: one(keys, {
		fields: [scaleNotes.keycode],
		references: [keys.keycode],
	}),
	note: one(notes, {
		fields: [scaleNotes.notecode],
		references: [notes.notecode],
	}),
}));

export const keysRelations = relations(keys, ({ many }) => ({
	scaleNotes: many(scaleNotes),
	charts_originalkeycode: many(charts, {
		relationName: "charts_originalkeycode_keys_keycode",
	}),
	charts_printkeycode: many(charts, {
		relationName: "charts_printkeycode_keys_keycode",
	}),
}));

export const notesRelations = relations(notes, ({ many }) => ({
	scaleNotes: many(scaleNotes),
	chords_notecode: many(chords, {
		relationName: "chords_notecode_notes_notecode",
	}),
	chords_bassnotecode: many(chords, {
		relationName: "chords_bassnotecode_notes_notecode",
	}),
}));

export const chartsRelations = relations(charts, ({ one, many }) => ({
	key_originalkeycode: one(keys, {
		fields: [charts.originalkeycode],
		references: [keys.keycode],
		relationName: "charts_originalkeycode_keys_keycode",
	}),
	key_printkeycode: one(keys, {
		fields: [charts.printkeycode],
		references: [keys.keycode],
		relationName: "charts_printkeycode_keys_keycode",
	}),
	sections: many(sections),
	usercharts: many(usercharts),
}));

export const sectionsRelations = relations(sections, ({ one, many }) => ({
	chart: one(charts, {
		fields: [sections.chartid],
		references: [charts.chartid],
	}),
	measures: many(measures),
	repeats: many(repeats),
}));

export const measuresRelations = relations(measures, ({ one, many }) => ({
	section: one(sections, {
		fields: [measures.sectionid],
		references: [sections.sectionid],
	}),
	repeats_repeatstart: many(repeats, {
		relationName: "repeats_repeatstart_measures_measureid",
	}),
	repeats_repeatend: many(repeats, {
		relationName: "repeats_repeatend_measures_measureid",
	}),
	repeats_ending1Start: many(repeats, {
		relationName: "repeats_ending1Start_measures_measureid",
	}),
	repeats_ending2Start: many(repeats, {
		relationName: "repeats_ending2Start_measures_measureid",
	}),
	repeats_ending2End: many(repeats, {
		relationName: "repeats_ending2End_measures_measureid",
	}),
	chords: many(chords),
	lyrics: many(lyrics),
}));

export const repeatsRelations = relations(repeats, ({ one }) => ({
	section: one(sections, {
		fields: [repeats.sectionid],
		references: [sections.sectionid],
	}),
	measure_repeatstart: one(measures, {
		fields: [repeats.repeatstart],
		references: [measures.measureid],
		relationName: "repeats_repeatstart_measures_measureid",
	}),
	measure_repeatend: one(measures, {
		fields: [repeats.repeatend],
		references: [measures.measureid],
		relationName: "repeats_repeatend_measures_measureid",
	}),
	measure_ending1Start: one(measures, {
		fields: [repeats.ending1Start],
		references: [measures.measureid],
		relationName: "repeats_ending1Start_measures_measureid",
	}),
	measure_ending2Start: one(measures, {
		fields: [repeats.ending2Start],
		references: [measures.measureid],
		relationName: "repeats_ending2Start_measures_measureid",
	}),
	measure_ending2End: one(measures, {
		fields: [repeats.ending2End],
		references: [measures.measureid],
		relationName: "repeats_ending2End_measures_measureid",
	}),
}));

export const chordsRelations = relations(chords, ({ one }) => ({
	measure: one(measures, {
		fields: [chords.measureid],
		references: [measures.measureid],
	}),
	note_notecode: one(notes, {
		fields: [chords.notecode],
		references: [notes.notecode],
		relationName: "chords_notecode_notes_notecode",
	}),
	note_bassnotecode: one(notes, {
		fields: [chords.bassnotecode],
		references: [notes.notecode],
		relationName: "chords_bassnotecode_notes_notecode",
	}),
}));

export const lyricsRelations = relations(lyrics, ({ one }) => ({
	measure: one(measures, {
		fields: [lyrics.measureid],
		references: [measures.measureid],
	}),
}));

export const userchartsRelations = relations(usercharts, ({ one }) => ({
	user: one(users, {
		fields: [usercharts.userid],
		references: [users.userid],
	}),
	chart: one(charts, {
		fields: [usercharts.chartid],
		references: [charts.chartid],
	}),
}));

export const usersRelations = relations(users, ({ many }) => ({
	usercharts: many(usercharts),
}));
