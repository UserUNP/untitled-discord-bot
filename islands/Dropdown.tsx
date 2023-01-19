import { ComponentChild } from "preact"
import { BsChevronCompactDown } from "https://deno.land/x/react_icons@0.2.3/bs/mod.ts";

interface Props {
	icon?: ComponentChild
}
const defaultIcon = BsChevronCompactDown

export default function Dropdown({ icon: Icon = defaultIcon }) {
	return <div class="bg-dark w-min p-1 rounded-md" >
		<Icon />
	</div>
}
