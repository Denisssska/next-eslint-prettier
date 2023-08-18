import { IPost } from '#/types';

export async function getAllPosts(): Promise<Array<IPost>> {
  const res = await fetch('https://next-eslint-prettier-blog.vercel.app/api/posts', {
    cache: 'force-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
