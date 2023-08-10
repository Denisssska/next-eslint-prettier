import Image from 'next/image';
import Link from 'next/link';

import styles from './blog.module.scss';

import { getAllPosts } from '../actions/getAllPosts';

const Blog = async () => {
  const data = await getAllPosts();
  console.log(data);
  return (
    <div className={styles.mainContainer}>
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
