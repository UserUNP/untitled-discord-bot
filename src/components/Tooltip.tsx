import type { ComponentChildren } from "preact";
import { h } from "preact";

interface Props {
	text: string;
	children: ComponentChildren;
}

export default function Tooltip({ text, children }: Props) {
	return (
		<span class="underline decoration-dotted" tabIndex={0} title={text}>{children}</span>
	);
}
