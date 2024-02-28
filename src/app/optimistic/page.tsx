import { Suspense } from 'react';

import { Heading } from '@common/typography/Heading';
import { OptimisticSidebar } from '@modules/optimistic/OptimisticSidebar';

export const metadata = {
  title: 'Optimistic',
};

function Optimistic({ searchParams }: OptimisticProps) {
  const genres = !searchParams?.genre
    ? []
    : typeof searchParams.genre === 'string'
      ? [searchParams.genre]
      : searchParams.genre;

  return (
    <div className="grid grid-cols-6">
      <OptimisticSidebar genres={genres} />
      <section className="col-span-4 p-4 group-has-[[data-pending]]:animate-pulse">
        <Suspense
          fallback={<p>Loading...</p>}
          key={JSON.stringify(searchParams)}
        >
          <article>
            <Heading>Optimistic (server)</Heading>
            <div>{genres?.map((genre) => <p key={genre}>{genre}</p>)}</div>
          </article>
        </Suspense>
      </section>
    </div>
  );
}

type OptimisticProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default Optimistic;
