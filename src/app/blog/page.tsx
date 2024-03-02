import Link from 'next/link';

import { getPosts } from '@server/data/posts';
import { Heading } from '@common/typography/Heading';
import { BlogOverview } from '@modules/blog/BlogOverview';

export const metadata = {
  title: 'Blog',
};

export const runtime = 'edge';

async function Blog() {
  const initialPosts = await getPosts();

  return (
    <article>
      <Heading>Blog</Heading>
      <Link href={`/blog/edit/${initialPosts?.[0]?.id}`}>Edit</Link>
      <BlogOverview />
    </article>
  );
}

export default Blog;
