import { neonConfig, Pool } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from 'ws';
import * as schema from '@shared/schema';

// Required for Node.js environments connecting via websockets
neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  console.log("DATABASE_URL is not set. Database storage will not be active (falling back to MemStorage).");
}

export const dbPool = process.env.DATABASE_URL ? new Pool({ connectionString: process.env.DATABASE_URL }) : null;
export const db = dbPool ? drizzle(dbPool, { schema }) : null;
