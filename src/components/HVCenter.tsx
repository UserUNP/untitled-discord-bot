import { ComponentChildren, h } from "preact";

interface Props {
	children: ComponentChildren;
}

export default function HVCenter({ children }: Props) {
	return (
		<div class="absolute top-0 right-0 flex flex-col grow justify-center items-center w-full h-full">
			{children}
		</div>
	)
}
