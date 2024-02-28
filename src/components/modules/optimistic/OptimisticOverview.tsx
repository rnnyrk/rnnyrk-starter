'use client';

import { useMovies } from '@queries/movies';
import { Heading } from '@common/typography/Heading';

export function OptimisticOverview({ activeGenres }: OptimisticOverviewProps) {
  const { data: movies, isLoading } = useMovies({ activeGenres });

  console.log({ movies, isLoading });

  return (
    <article>
      <Heading>Optimistic (server)</Heading>
      <div>
        {activeGenres.map((genre) => (
          <p key={genre}>{genre}</p>
        ))}
      </div>
    </article>
  );
}

type OptimisticOverviewProps = {
  activeGenres: string[];
};
