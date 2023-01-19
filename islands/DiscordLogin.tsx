import Supabase from "../static/api/Supabase.ts";
import { FaDiscord } from "../static/icons.ts";

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
