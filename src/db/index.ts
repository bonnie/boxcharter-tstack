import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is null\nExiting");
}

// from https://supabase.com/docs/guides/database/drizzle
// Disable prefetch as it is not supported for "Transaction" pool mode
// biome-ignore lint/style/noNonNullAssertion: <throw error if null above>
export const client = postgres(process.env.DATABASE_URL!, {
  prepare: false,
});
export const db = drizzle({ client, schema });
