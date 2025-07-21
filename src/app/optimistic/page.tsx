import { Suspense } from 'react';

import { getMovies } from '@server/data/movies';
import { OptimisticOverview } from '@modules/optimistic/OptimisticOverview';
import { OptimisticSidebar } from '@modules/optimistic/OptimisticSidebar';

export const metadata = {
  title: 'Optimistic',
};

export const runtime = 'edge';

type OptimisticProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Optimistic(props: OptimisticProps) {
  const searchParams = await props.searchParams;
  const genres = searchParams.genre;

  const activeGenres = !genres ? [] : typeof genres === 'string' ? [genres] : genres;

  // Passing initial movies prevents a flash of initial empty state (like with genres)
  const initialMovies = await getMovies({ activeGenres });

  return (
    <div className="group grid grid-cols-6 items-start">
      <OptimisticSidebar activeGenres={activeGenres} />
      <section
        className="col-span-4 p-4 group-has-data-pending:animate-pulse"
        style={{ animationDuration: '.5s' }}
      >
        <Suspense
          fallback={<p>Loading...</p>}
          key={JSON.stringify(searchParams)}
        >
          <OptimisticOverview
            activeGenres={activeGenres}
            initialMovies={initialMovies}
          />
        </Suspense>
      </section>
    </div>
  );
}
