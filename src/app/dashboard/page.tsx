'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import RequestInit from 'node-fetch';
import { useEffect } from 'react';
import useSWR from 'swr';

import styles from './dashboard.module.scss';

import { Post } from '#/types';

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const navigateToLogin = () => {
    router.push('/dashboard/login');
  };
  useEffect(() => {
    if (session.status === 'unauthenticated') {
      navigateToLogin();
    }
  }, [session.status]);

  const fetcher = (url: string, options: RequestInit) => {
    return fetch(url, options).then(res => {
      return res.json();
    });
  };

  const { data, mutate, error, isLoading } = useSWR<Post[], Error>(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  if (session.status == 'loading') {
    return <p>Loading...</p>;
  }
  // if (session.status == 'unauthenticated') {
  //   router?.push('/dashboard/login');
  // }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session?.data?.user?.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status == 'authenticated') {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? 'Loading'
            : data?.map(post => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.img} alt={post.title} width={200} height={100} />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span className={styles.delete} onClick={() => handleDelete(post._id)}>
                    X
                  </span>
                </div>
              ))}
        </div>

        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea cols={30} rows={10} className={styles.textArea} />
          <button className={styles.button}> Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
