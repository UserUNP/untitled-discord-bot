import { SupabaseClient, createClient } from "supabase";
import { signal } from "@preact/signals";

import { User } from "https://esm.sh/v103/@supabase/gotrue-js@2.7.0/dist/module/lib/types";

export default class Supabase {

	static PUBLIC_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpibGd0amZ5Ym9ubGdua3pscmtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMzNzI3MjcsImV4cCI6MTk4ODk0ODcyN30.lP7rjmenniFo6efMl9WCJiay1iTjUe5nT26X8uIWcbs";
	static client: SupabaseClient = createClient("https://jblgtjfybonlgnkzlrkd.supabase.co", Supabase.PUBLIC_ANON_KEY);

	static user = signal<User | null>(null);

	static async loginUser(auth = false) {
		const res = await Supabase.client.auth.getUser()
		if(!res.error) {
			Supabase.user.value = res.data.user;
			console.log(Supabase.user.value)
			return res.data.user;
		}
		if(auth) await Supabase.client.auth.signInWithOAuth({provider: "discord", options: {
			scopes: "identify guilds.join"
		}});
		return null;
	}
}
