'use client';

import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';

import styles from './login.module.scss';
import Link from 'next/link'

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status == 'loading') {
    return <p>Loading</p>;
  }
  if (session.status == 'authenticated') {
    router?.push('/dashboard');
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn('credentials', { email, password });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="email" placeholder="Email" required className={styles.input} />
        <input type="password" placeholder="Password" required className={styles.input} />
        <button className={styles.button}>Login</button>
      </form>

      <button onClick={() => signIn('google')}>Login with Google</button>
      <button onClick={() => signIn('github')}>Login with Github</button>
      <Link href={'/dashboard/register'}>Sign Up</Link>
    </div>
  );
};

export default Login;
