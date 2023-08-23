import { IPost } from '#/types';

export async function getOnePost(id: string): Promise<IPost> {
  try {
    const res = await fetch(`https://next-eslint-prettier-blog.vercel.app/api/posts/${id}`, {
      cache: 'force-cache',
    });
    return res.json();
  } catch (error: any) {
    // return notFound();
    throw new Error(error);
  }
}
