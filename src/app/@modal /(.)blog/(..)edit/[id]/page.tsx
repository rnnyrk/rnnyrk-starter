import { getPostById } from '@server/data/posts';

import { Modal } from './modal';

async function EditBlogModal({ params }: EditBlogModalProps) {
  const initialTask = await getPostById(params.id);

  return (
    <Modal>
      <h1>Edit post: {initialTask?.name}</h1>
    </Modal>
  );
}

type EditBlogModalProps = {
  params: {
    id: string;
  };
};

export default EditBlogModal;
