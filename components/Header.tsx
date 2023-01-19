import { ComponentChildren } from "preact";

interface Props {
	name?: string;
	children?: ComponentChildren;
}

export default function Header({ name = "UNTITLED DISCORD BOT", children }: Props) {
	return (
		<div class="bg-dark grid items-center grid-cols-2 m-3 rounded-md text-xl">
			<h1 class="text-fg p-3 font-bold">{name}</h1>
			<div class="inline-flex justify-end m-3 gap-10">
				{children}
			</div>
		</div>
	);
}
