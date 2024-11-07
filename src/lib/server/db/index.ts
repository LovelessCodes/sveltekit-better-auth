import { env } from "$env/dynamic/private";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as authSchema from "./auth-schema";
if (!env.DATABASE_URL) throw new Error("DATABASE_URL is not set");
const client = createClient({ url: env.DATABASE_URL, authToken: env.TURSO_DB_AUTH_TOKEN });
export const db = drizzle(client, { schema: authSchema });
