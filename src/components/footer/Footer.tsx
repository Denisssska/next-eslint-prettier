'use client';

import Image from 'next/image';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>2023 MyApp. All right reserved</div>
      <div className={styles.social}>
        <Image src="/vk.png" alt="vk.com" width={15} height={15} className={styles.icon} />
        <Image src="/inst.png" alt="inst.com" width={15} height={15} className={styles.icon} />
        <Image src="/twitter.png" alt="tw.com" width={15} height={15} className={styles.icon} />
        <Image src="/yt.png" alt="yt.com" width={15} height={15} className={styles.icon} />
      </div>
    </footer>
  );
};

export default Footer;
