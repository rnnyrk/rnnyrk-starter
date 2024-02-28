import type { InferInsertModel } from 'drizzle-orm';

import type { movies, posts } from './schema';

export type Movie = InferInsertModel<typeof movies>;
export type Post = InferInsertModel<typeof posts>;
