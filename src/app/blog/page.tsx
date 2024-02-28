import { BlogOverview } from "@modules/blog/BlogOverview";

export const metadata = {
  title: 'Blog',
};

function Blog() {
  return (
    <article>
      <h1>Blog</h1>
      <BlogOverview />
    </article>
  );
};

export default Blog;
