import { IPost } from '#/types';

export async function getAllPosts(q: string): Promise<Array<IPost>> {
  const res = await fetch(`https://next-eslint-prettier-blog.vercel.app/api/posts?q=${q}`, {
    // const res = await fetch(`http://localhost:3000/api/posts?q=${q}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
