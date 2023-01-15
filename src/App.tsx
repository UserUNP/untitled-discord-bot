import { ComponentChildren, h } from "preact";

import "./styles/global.css";
import Header from "./components/Header";

interface Props {
	article?: boolean;
	name?: string;
	noHeader?: boolean;
	children: ComponentChildren;
	side?: ComponentChildren;
}

export default function App({ article, name, noHeader, side, children }: Props) {
	return (
		<html lang="en">
		<head>
			<meta charSet="utf-8" />
			{/* <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> */}
			<meta name="viewport" content="width=device-width" />
			<title>{!!name ? `UDB. - ${name}` : "Untitled Discord Bot."}</title>

			<script src="https://kit.fontawesome.com/f1c64566e3.js" crossOrigin="anonymous"></script>

			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
			<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,700;1,400;1,700&family=IBM+Plex+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet" />
		</head>

		<body>

		{!!noHeader ? void 0 : <Header name={name} side={side}></Header>}

		{ article ? <article> <main>{children}</main> </article> : <div>{children}</div> }

		</body>
		</html>
	);
}
