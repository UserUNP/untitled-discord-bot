import App from "../components/layouts/App.tsx";
import Tooltip from "../components/Tooltip.tsx";
import DiscordLogin from "../islands/DiscordLogin.tsx";

export default function Homepage() {
	const side = [
		<DiscordLogin />
	]

	return <App article side={side}>
		<p>You have to <DiscordLogin text="CONNECT WITH DISCORD" /> to register/view your commands</p>
		<br/>
		<p><strong><samp><Tooltip text="Click to show all">0</Tooltip> REGISTERED COMMANDS</samp></strong></p>

	</App>
}
