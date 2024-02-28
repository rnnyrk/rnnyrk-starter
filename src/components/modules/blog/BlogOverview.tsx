'use client';

import { usePosts } from "@queries/usePosts";

export function BlogOverview() {
  const { data, isLoading } = usePosts();

  if (!data || isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>
          <h2>{post.name}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}
