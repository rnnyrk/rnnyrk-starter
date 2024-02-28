import type * as i from '@types';
import { useQuery } from '@tanstack/react-query';

import { getMovies } from '@server/data/movies';

export function useMovies({ activeGenres }: i.GetMovies) {
  return useQuery({
    queryKey: ['movies', activeGenres],
    queryFn: () => getMovies({ activeGenres }),
  });
}

export function useGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: () => getMovies({ activeGenres: null }),
    select: (data) => {
      if (!data) return [];

      const genres = data.map((movie) => {
        return movie.genres?.split(',');
      });

      return Array.from(new Set(genres.flat())) as string[];
    },
  });
}