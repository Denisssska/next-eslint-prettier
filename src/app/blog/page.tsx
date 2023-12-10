import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import styles from './blog.module.scss';

import { getAllPosts } from '../actions/getAllPosts';
import Search from '../search/Search';

export const metadata: Metadata = {
  title: 'Next-Blog-Page',
  description: 'Page about posts',
};
interface IBlog {
  searchParams?: { q: string; page: string };
}
const Blog: FC<IBlog> = async ({ searchParams }) => {
  //для другого проекта
  const q = searchParams?.q || '';
  // const page = searchParams?.page;
  ///
  console.log('17', searchParams);
  const data = await getAllPosts(q);

  return (
    <div className={styles.mainContainer}>
      {/* для другого проекта */}
      <Search placeholder="Search for a post name..." />
      {data.map(item => (
        <Link href={`blog/${item._id}`} className={styles.container} key={item._id}>
          <div className={styles.imageContainer}>
            <Image src={item.img} alt="" width={400} height={250} className={styles.image} />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
