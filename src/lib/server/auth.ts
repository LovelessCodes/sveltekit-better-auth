import { env } from "$env/dynamic/private";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db"; // your drizzle instance

const providers = ["discord", "google", "github", "microsoft", "twitch"];

const configuredProviders = providers.reduce<
	Record<string, { clientId: string; clientSecret: string }>
>((acc, provider) => {
	const id = env[`${provider.toUpperCase()}_CLIENT_ID`];
	const secret = env[`${provider.toUpperCase()}_CLIENT_SECRET`];
	if (id && id.length > 0 && secret && secret.length > 0) {
		acc[provider] = { clientId: id, clientSecret: secret };
	}
	return acc;
}, {});

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "sqlite", // or "mysql", "sqlite"
	}),
	socialProviders: configuredProviders,
    trustedOrigins: env.ALLOWED_ORIGINS.split(",") || [],
});
