// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration
import { randomUUID } from 'crypto';
import { sql } from 'drizzle-orm';
import { int, sqliteTableCreator, text } from 'drizzle-orm/sqlite-core';

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `rnnyrk-test_${name}`);

export const posts = createTable('post', {
  id: text('id', { length: 36 })
    .primaryKey()
    .$defaultFn(() => randomUUID())
    .notNull(),
  name: text('name', { length: 256 }),
  content: text('content'),
  image: text('image'),
  created_at: int('created_at', { mode: 'timestamp_ms' })
    .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`)
    .notNull(),
  updated_at: int('updated_at', { mode: 'timestamp' }),
});

export const movies = createTable('movie', {
  id: text('id', { length: 36 })
    .primaryKey()
    .$defaultFn(() => randomUUID())
    .notNull(),
  title: text('title', { length: 256 }),
  director: text('director', { length: 256 }),
  year: int('year', { mode: 'number' }),
  genres: text('genres'),
});
