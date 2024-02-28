import { useQuery } from '@tanstack/react-query';

import { getMovies } from '@server/data/movies';

export function useMovies() {
  return useQuery({
    queryKey: ['movies'],
    queryFn: () => getMovies(),
  });
}

export function useGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: () => getMovies(),
    select: (data) => {
      if (!data) return [];

      const genres = data.map((movie) => {
        return movie.genres?.split(',');
      });

      return Array.from(new Set(genres.flat())) as string[];
    },
  });
}
