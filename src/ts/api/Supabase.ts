import { SupabaseClient, createClient } from "@supabase/supabase-js";

export default class Supabase {

	static PUBLIC_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpibGd0amZ5Ym9ubGdua3pscmtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMzNzI3MjcsImV4cCI6MTk4ODk0ODcyN30.lP7rjmenniFo6efMl9WCJiay1iTjUe5nT26X8uIWcbs";
	static client: SupabaseClient = createClient("https://jblgtjfybonlgnkzlrkd.supabase.co", Supabase.PUBLIC_ANON_KEY);

	static async getUser() {
		const res = await Supabase.client.auth.getUser()
		if(!res.error) return res.data.user;
		await Supabase.client.auth.signInWithOAuth({provider: "discord", options: {
			scopes: "identify guilds.join"
		}});
		return null;
	}
}
