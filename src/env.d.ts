/// <reference types="astro/client" />
interface ImportMetaEnv {
	readonly APP_ID: string;
	readonly APP_SECRET: string;
	readonly AUTH_CALLBACK: string;
	readonly AUTH_SCOPES: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
