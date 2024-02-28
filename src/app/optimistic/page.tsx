import { Suspense } from 'react';

import { OptimisticOverview } from '@modules/optimistic/OptimisticOverview';
import { OptimisticSidebar } from '@modules/optimistic/OptimisticSidebar';

export const metadata = {
  title: 'Optimistic',
};

async function Optimistic({ searchParams }: OptimisticProps) {
  const activeGenres = !searchParams?.genre
    ? []
    : typeof searchParams.genre === 'string'
      ? [searchParams.genre]
      : searchParams.genre;

  return (
    <div className="grid grid-cols-6">
      <OptimisticSidebar activeGenres={activeGenres} />
      <section className="col-span-4 p-4 group-has-[[data-pending]]:animate-pulse">
        <Suspense
          fallback={<p>Loading...</p>}
          key={JSON.stringify(searchParams)}
        >
          <OptimisticOverview activeGenres={activeGenres} />
        </Suspense>
      </section>
    </div>
  );
}

type OptimisticProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default Optimistic;
