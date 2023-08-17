'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';

import { FormEvent, useEffect } from 'react';

import styles from './login.module.scss';

const Login = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status == 'authenticated') {
      router?.push('/dashboard');
    }
  }, [router, session.status]);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

  if (session.status == 'loading') {
    return <p>Loading</p>;
  }
  // if (session.status == 'authenticated') {
  //   router?.push('/dashboard');
  // }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget[0] as HTMLInputElement).value;
    const password = (e.currentTarget[1] as HTMLInputElement).value;
    const res = await signIn('credentials', { email, password, redirect: false });
    if (res && !res.error) {
      router.push('/dashboard');
    } else {
      console.log(res);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="none">
        <input type="email" placeholder="Email" autoComplete="none" required className={styles.input} />
        <input type="password" placeholder="Password" autoComplete="off" required className={styles.input} />
        <button className={styles.button}>Login</button>
      </form>

      <button onClick={() => signIn('google')}>Login with Google</button>
      <button onClick={() => signIn('github', { callbackUrl })}>Login with Github</button>
      <Link href={'/dashboard/register'}>Sign Up</Link>
    </div>
  );
};

export default Login;
