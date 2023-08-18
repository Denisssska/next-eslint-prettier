import { NextPage } from 'next';
import Image from 'next/image';

import styles from './page.module.scss';

import { IdParams, IPost } from '#/types';

export async function generateMetadata({ params }: IdParams) {
  const post = await getOnePost(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

async function getOnePost(id: string): Promise<IPost> {
  const res = await fetch(`https://next-eslint-prettier-blog.vercel.app/api/posts/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const BlogId: NextPage<IdParams> = async ({ params }) => {
  const data = await getOnePost(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image src={data.img} alt="" width={40} height={40} className={styles.avatar} />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogId;
//ssg
// export async function generateStaticParams() {
//   const posts = await getAllPosts();

//   return posts.map(post => ({
//     id: post._id,
//   }));
// }
