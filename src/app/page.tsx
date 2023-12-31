import Image from 'next/image';

import Hero from 'public/hero.png';

import styles from './page.module.scss';

import Button from '@/components/button/Button';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.desc}>Home Page description</p>
        <Button text="See our Works" url="/portfolio" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="main photo" className={styles.img} />
      </div>
    </main>
  );
}
