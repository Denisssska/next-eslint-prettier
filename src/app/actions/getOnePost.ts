import { IPost } from '#/types';

export async function getOnePost(id: string): Promise<IPost> {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'force-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
