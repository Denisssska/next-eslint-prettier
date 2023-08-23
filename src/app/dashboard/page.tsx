'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { FormEvent, useEffect } from 'react';
import useSWR from 'swr';

import styles from './dashboard.module.scss';

import { IPost } from '#/types';

import type { RequestInit } from 'next/dist/server/web/spec-extension/request';

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.status == 'unauthenticated') {
      router?.push('/dashboard/login');
    }
  }, [router, session.status]);

  const fetcher = (url: string, options: RequestInit) => {
    return fetch(url, options).then(res => {
      return res.json();
    });
  };

  const { data, mutate, error, isLoading } = useSWR<IPost[], Error>(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );
  console.log('dashboard', session);

  if (session.status == 'loading') {
    return <p>Loading...</p>;
  }
  // if (session.status == 'unauthenticated') {
  //   router?.push('/dashboard/login');
  // }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = (e.currentTarget[0] as HTMLInputElement).value;
    const desc = (e.currentTarget[1] as HTMLInputElement).value;
    const img = (e.currentTarget[2] as HTMLInputElement).value;
    const content = (e.currentTarget[3] as HTMLInputElement).value;

    try {
      await fetch(`/api/posts`, {
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
      e.currentTarget.reset();
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
            ? 'loading'
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
