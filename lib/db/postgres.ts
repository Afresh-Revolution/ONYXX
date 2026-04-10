import { Pool } from "pg";

const globalForPg = globalThis as unknown as { onyxxPgPool: Pool | undefined };

/**
 * Server-only connection pool. Set `DATABASE_URL` to a PostgreSQL connection URI
 * (e.g. Supabase: Project Settings → Database → Connection string → URI).
 */
export function getPgPool(): Pool | null {
  const url = process.env.DATABASE_URL?.trim();
  if (!url) return null;

  if (!globalForPg.onyxxPgPool) {
    globalForPg.onyxxPgPool = new Pool({
      connectionString: url,
      max: Number(process.env.PG_POOL_MAX ?? 10),
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 10_000,
    });
  }
  return globalForPg.onyxxPgPool;
}
