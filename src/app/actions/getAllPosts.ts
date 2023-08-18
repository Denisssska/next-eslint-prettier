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
// export async function getAllPosts(): Promise<Array<IPost>> {
//   const res = await fetch('http://localhost:3000/api/posts', {
//     cache: 'no-store',
//   });

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }
