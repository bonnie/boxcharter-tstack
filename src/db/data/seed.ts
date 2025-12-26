// adapted from www.answeroverflow.com/m/1200193597870448780

import "dotenv/config";
import { db } from "..";
import { keys, notes, scaleNotes } from "../schema";
import scales from "./keys";

const VERBOSE = process.env.VERBOSE;
const NOTE_NAMES = ["A", "B", "C", "D", "E", "F", "G"];
const ACCS = ["b", "", "#"];

const addNotes = async () => {
  const allNotes = [];
  NOTE_NAMES.forEach((noteName) => {
    ACCS.forEach((acc) => {
      allNotes.push(`${noteName}${acc}`);
    });
  });
  allNotes.push("%");
  if (VERBOSE) console.log("**ADDING NOTES**", allNotes);

  for (const noteName of allNotes) {
    if (VERBOSE) console.log("  ADDING NOTE", noteName);
    await db.insert(notes).values({ notecode: noteName });
  }
};

const addKeys = async () => {
  if (VERBOSE) console.log("**ADDING KEYS**");

  for (const [keycode, scale] of Object.entries(scales)) {
    if (VERBOSE) console.log("  ADDING KEY", keycode);

    await db.insert(keys).values({ keycode });

    await Promise.all(
      scale.map(async (notecode, scaledegree) => {
        const entry = `scale note, key ${keycode}, note ${notecode}, scaledegree ${scaledegree}`;
        try {
          const prom = db
            .insert(scaleNotes)
            .values({ keycode, notecode, scaledegree });
          if (VERBOSE) console.log(`    Added ${entry}`);
          return prom;
        } catch (error) {
          console.error(`    Could not add ${entry}:`, error);
        }
      }),
    );
  }
};

await addNotes();
await addKeys();

console.log("Type ctrl + c to close database connection pool");
