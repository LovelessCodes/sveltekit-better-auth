import { createAuthClient } from "better-auth/svelte"; // make sure to import from better-auth/svelte

export const authClient = createAuthClient({
	baseURL: import.meta.env.VITE_BETTER_AUTH_URL,
});
