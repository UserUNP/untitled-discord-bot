interface ErrorResponse {
	readonly error: string;
	readonly message: string;
}

interface GetReqInit {
	headers?: HeadersInit;
	credentials?: RequestCredentials;
}

interface PostReqInit extends GetReqInit {
	body?: BodyInit;
}

function handleError(error: string, obj: unknown): ErrorResponse {
	return {
		error: error,
		message: !obj ? "No further information." : typeof obj === "object" ? ( "message" in obj && typeof obj.message === "string" ? obj.message : "error" in obj && typeof obj.error === "string" ? obj.error : "No further information." ) : typeof obj === "string" ? !obj ? "No further information." : obj : "No further information."
	} as const;
}

async function request<T extends object>(url: string, init: RequestInit): Promise<T | ErrorResponse> {
	const res = await fetch(url, init);
	let json: T;
	try { json = await res.json() as T; } catch(e) { return handleError("Response is not JSON.", e); }
	if(!json) return handleError("Falsey response object.", `Expected a valid response, got ${JSON.stringify(json)} instead.`);
	return json;
}

export async function get<T extends object>(url: string, { headers, credentials }: GetReqInit) {
	return await request<T>(url, { method: "GET", headers, credentials });
}

export async function post<T extends object>(url: string, { headers, credentials, body }: PostReqInit) {
	return await request<T>(url, { method: "POST", headers, credentials, body });
}
