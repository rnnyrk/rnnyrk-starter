'use server';

import type * as i from '@types';
import { inArray } from 'drizzle-orm';

import { db } from '@server/db';

import * as schema from '../db/schema';

/**
 * Marking this file as use server will make all exported function accessible via fetch
 * and will be executed on the server, but can ALSO be called in a client side component (BlogOverview.tsx)
 *
 * @see https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
 */

export async function getMovies({ activeGenres }: i.GetMovies) {
  if (activeGenres && activeGenres.length > 0) {
    return await db.query.movies.findMany({
      where: inArray(schema.movies.genres, activeGenres),
    });
  }

  return await db.query.movies.findMany();
}
