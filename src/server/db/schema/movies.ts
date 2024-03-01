import { integer, pgTable, text, uuid } from 'drizzle-orm/pg-core';

export const movies = pgTable('movie', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  title: text('title').notNull(),
  director: text('director').notNull(),
  year: integer('year').notNull(),
  genres: text('genres').notNull(),
});
