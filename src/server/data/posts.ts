'use server';

import { db } from '@server/db';

/**
 * Marking this file as use server will make all exported function accessible via fetch
 * and will be executed on the server, but can ALSO be called in a client side component (BlogOverview.tsx)
 *
 * @see https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
 */

export async function getPosts() {
  return await db.query.posts.findMany();
}
