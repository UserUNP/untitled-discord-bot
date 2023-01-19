import { ComponentChildren } from "preact";
import { useState } from "preact/hooks";
import * as icons from "../static/icons.ts";

interface Props {
	icon?: keyof typeof import("../static/icons.ts");
	children: ComponentChildren
}

function handleDropdown(isShown: boolean): boolean {
	return !isShown;
}

export default function Dropdown({ icon = "VscTriangleDown", children }: Props) {
	const Icon = icons[icon];
	const [ shown, setShown ] = useState(false);

	return <div class="relative">
		<button class="bg-dark w-min p-1 rounded-md" onClick={() => setShown(handleDropdown)}><Icon /></button>
		{ !shown ? void 0 : <div class="absolute w-max grid justify-items-center bg-dark right-0 p-1 rounded-sm ring-1 ring-fg out-line-white">
			<button class="focus:outline-none" onClick={() => setShown(handleDropdown)}>close</button>
			<p>work in progress</p>
			{children}
		</div>  }
	</div>
}
