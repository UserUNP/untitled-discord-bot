import { ComponentChildren } from "preact";
import { Head, asset } from "$fresh/runtime.ts";

import Header from "../Header.tsx";
import Dropdown from "../../islands/Dropdown.tsx";

interface Props {
	article?: boolean;
	name?: string;
	noHeader?: boolean;
	side?: ComponentChildren
	children: ComponentChildren;
}

export default function App({ children, name, article, noHeader, side }: Props) {
	return (<>

		<Head>
			<title>{!name ? "Untitled Discord Bot." : `UDB. - ${name}` }</title>
			<meta charSet="utf-8" />
			{/* <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> */}
			<meta name="viewport" content="width=device-width" />

			<script src="https://kit.fontawesome.com/f1c64566e3.js" crossOrigin="anonymous"></script>

			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
			<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,700;1,400;1,700&family=IBM+Plex+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet" />

			<link rel="stylesheet" href={asset("global.css")} />
		</Head>

		<body>
			{!noHeader ? <Header name={name}>{side}</Header> : <div class="absolute m-2 right-1"><Dropdown /></div>}

			{article ? <article> <main>{children}</main> </article> : <main>{children}</main>}
		</body>

	</>);
}
