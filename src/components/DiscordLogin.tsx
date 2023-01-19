import { h } from "preact";

import Supabase from "../ts/api/Supabase";

interface Props {
	text?: string;
}

async function handleLogin() {
	const user = await Supabase.getUser();
	if(!user) throw new Error("User not logged in.");
	console.log(user);
}

export default function DiscordLogin({ text }: Props) {
	return (
		<span>
			<button class="font-sans inline-block" onClick={handleLogin}>
				<span>{text || "Login"}</span> <i class="fa-brands fa-discord"></i>
			</button>
		</span>
	)
}
