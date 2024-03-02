import { getPostById } from '@server/data/posts';

export async function generateMetadata({ params }: EditBlogPageProps) {
  const post = await getPostById(params.id);

  return {
    title: `Edit post: ${post?.name}`,
  };
}

async function EditBlogPage({ params }: EditBlogPageProps) {
  const initialTask = await getPostById(params.id);

  return (
    <section>
      <h1>Edit post: {initialTask?.name}</h1>
    </section>
  );
}

type EditBlogPageProps = {
  params: {
    id: string;
  };
};

export default EditBlogPage;
