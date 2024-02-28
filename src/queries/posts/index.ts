import { useQuery } from '@tanstack/react-query';

import { getPosts } from '@server/data/posts';

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });
}
