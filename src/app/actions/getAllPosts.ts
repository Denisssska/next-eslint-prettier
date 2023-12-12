export async function getAllPosts(q: string, page: string): Promise<any> {
  const res = await fetch(`https://next-eslint-prettier-blog.vercel.app/api/posts?q=${q}&page=${page}`, {
    // const res = await fetch(`http://localhost:3000/api/posts?q=${q}&page=${page}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
