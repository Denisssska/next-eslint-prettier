import Link from 'next/link';
import { FC } from 'react';

import styles from './button.module.scss';

import { IButton } from '#/types';

const Button: FC<IButton> = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default Button;
