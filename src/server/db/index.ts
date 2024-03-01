// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import { env } from '@env';

import * as movies from './schema/movies';
import * as posts from './schema/posts';

const sql = neon(env.DATABASE_URL);

// @ts-expect-error Neon/Drizzle types are not compatible (waiting for fix)
export const db = drizzle(sql, {
  schema: {
    ...movies,
    ...posts,
  },
});
