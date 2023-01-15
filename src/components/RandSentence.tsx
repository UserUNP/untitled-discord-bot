import { h } from "preact";

const funnies = [
	"henlo",
	"bruh moner",
	"hello there :^)",
	"how u doin'",
] as const;

export default function RandParag() {
	return (
		<span>{funnies[Math.floor(Math.random()*funnies.length)]}</span>
	);
}
