import { IPost } from '#/types';

export async function getOnePost(id: string): Promise<IPost> {
  const res = await fetch(`https://next-eslint-prettier-blog.vercel.app/api/posts/${id}`, {
    cache: 'force-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
