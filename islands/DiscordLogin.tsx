import Supabase from "../static/api/Supabase.ts";
import { FaDiscord } from "https://deno.land/x/react_icons@0.2.3/fa/mod.ts";

interface Props {
	text?: string;
}

export default function DiscordLogin({ text = "Login" }: Props) {
	return (
		<span>
			<button class="font-sans gap-1 inline-flex items-center justify-items-center" onClick={()=>Supabase.loginUser(true)}>
				<span>{text}</span>
				<FaDiscord class="inline" size={20} />
			</button>
		</span>
	)
}
