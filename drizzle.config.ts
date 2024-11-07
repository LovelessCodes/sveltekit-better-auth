import { defineConfig } from 'drizzle-kit';
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

const authToken = process.env.TURSO_DB_AUTH_TOKEN;

export default defineConfig({
  schema: './src/lib/server/db/auth-schema.ts',

  dbCredentials: {
    url: process.env.DATABASE_URL,
    authToken,
  },

  verbose: true,
  strict: true,
  dialect: authToken ? 'turso' : 'sqlite'
});
