'use client';

import { useOptimistic, useTransition } from 'react';
import { useRouter } from 'next/navigation';

import { cn } from '@utils';
import { Heading } from '@common/typography/Heading';

export function OptimisticSidebar({ genres }: OptimisticSidebarProps) {
  const router = useRouter();
  const [optimisticGenres, setOptimisticGenres] = useOptimistic(genres);
  const [pending, startTransition] = useTransition();

  function updateGenres(newGenres: string[]) {
    const newParams = new URLSearchParams(newGenres.sort().map((genre) => ['genre', genre]));

    startTransition(() => {
      setOptimisticGenres(newGenres.sort());
      router.push(`?${newParams as unknown as string}`);
    });
  }

  return (
    <aside
      data-pending={pending ? '' : undefined}
      className="group col-span-2 p-4 bg-slate-800"
    >
      <Heading variant="h3">Genres</Heading>
      <div className="flex gap-2 flex-wrap mb-4">
        {GENRES.map((genre) => {
          const isActive = optimisticGenres.includes(genre);

          return (
            <button
              key={`genre-btn-${genre}`}
              onClick={() => {
                const newGenres = !optimisticGenres.includes(genre)
                  ? [...optimisticGenres, genre]
                  : optimisticGenres.filter((g) => g !== genre);

                updateGenres(newGenres);
              }}
              className={cn('px-3 py-1 rounded-full whitespace-nowrap font-medium border text-sm', {
                'bg-secondary text-white border-secondary ': isActive,
                'border-gray-500 hover:border-gray-400': !isActive,
              })}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <div>
        <strong>Params (Client):</strong>
        <ul>{optimisticGenres?.map((genre) => <li key={`list-${genre}`}>{genre}</li>)}</ul>
      </div>
    </aside>
  );
}

type OptimisticSidebarProps = {
  genres: string[];
};

const GENRES = [
  'Action',
  'Adventure',
  'Animation',
  'Biography',
  'Comedy',
  'Crime',
  'Drama',
  'Family',
  'Fantasy',
  'Film-Noir',
  'History',
  'Horror',
  'Music',
  'Musical',
  'Mystery',
  'Romance',
  'Sci-Fi',
  'Sport',
  'Thriller',
  'War',
  'Western',
];
