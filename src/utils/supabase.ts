/** biome-ignore-all lint/style/noNonNullAssertion: <non-null-ness will throw error> */
import { createServerClient } from "@supabase/ssr";
import { getCookies, setCookie } from "@tanstack/react-start/server";

if (!process.env.SUPABASE_URL) {
	throw new Error("SUPABASE_URL environment variable not set");
}

if (!process.env.SUPABASE_PUBLISHABLE_KEY) {
	throw new Error("SUPABASE_PUBLISHABLE_KEY environment variable not set");
}

type Cookie = Record<string, string>;

export function getSupabaseServerClient() {
	return createServerClient(
		process.env.SUPABASE_URL!,
		process.env.SUPABASE_PUBLISHABLE_KEY!,
		{
			cookies: {
				getAll() {
					return Object.entries(getCookies()).map(([name, value]) => ({
						name,
						value,
					}));
				},
				setAll(cookies: Array<Cookie>) {
					cookies.forEach((cookie: Cookie) => {
						setCookie(cookie.name, cookie.value);
					});
				},
			},
		},
	);
}
