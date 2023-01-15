/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly APP_ID: string;
	readonly APP_SECRET: string;

	readonly API_PUBLIC_ANON: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
