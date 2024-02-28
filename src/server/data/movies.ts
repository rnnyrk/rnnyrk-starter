'use server';

import type * as i from '@types';
import { and, like } from 'drizzle-orm';

import { db } from '@server/db';

import * as schema from '../db/schema';

/**
 * Marking this file as use server will make all exported function accessible via fetch
 * and will be executed on the server, but can ALSO be called in a client side component (BlogOverview.tsx)
 *
 * @see https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
 */

export async function getMovies({ activeGenres }: Pick<i.GetMovies, 'activeGenres'>) {
  // sleep for 2 seconds to simulate a slow network
  await new Promise((resolve) => setTimeout(resolve, 400));

  if (activeGenres && activeGenres.length > 0) {
    const likeGenres = activeGenres.map((genre) => like(schema.movies.genres, `%${genre}%`));
    return await db
      .select()
      .from(schema.movies)
      .where(and(...likeGenres));
  }

  return await db.query.movies.findMany();
}
