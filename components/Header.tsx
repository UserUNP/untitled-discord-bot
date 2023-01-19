import { ComponentChildren } from "preact";
import Dropdown from "../islands/Dropdown.tsx";

interface Props {
	name?: string;
	children?: ComponentChildren;
}

export default function Header({ name = "UNTITLED DISCORD BOT", children }: Props) {
	return (
		<div class="bg-dark grid items-center grid-cols-2 m-3 rounded-md text-xl">
			<h1 class="text-fg p-3 font-bold">{name}</h1>
			<div class="md:inline-flex justify-end hidden m-3 gap-10">{children}</div>
			<div class="inline-flex justify-end md:hidden m-3">
				<Dropdown icon="VscThreeBars">
					ok
				</Dropdown>
			</div>
		</div>
	);
}
