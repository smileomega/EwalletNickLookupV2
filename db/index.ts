import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

// This is the correct way neon config - DO NOT change this
neonConfig.webSocketConstructor = ws;

// Database URL is now set directly in the code
// No need to check for environment variables

// Use the direct connection string for Neon PostgreSQL
const DATABASE_URL = "postgresql://neondb_owner:npg_zhr1awkMGqR3@ep-rapid-meadow-a4q31x02-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require";
export const pool = new Pool({ connectionString: DATABASE_URL });
export const db = drizzle({ client: pool, schema });