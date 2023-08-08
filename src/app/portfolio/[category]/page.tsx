import { NextPage } from 'next';

import Image from 'next/image';

import { notFound } from 'next/navigation';

import styles from './category.module.scss';
import { items } from './data';

import { Params } from '#/types';
import Button from '@/components/button/Button';

const getData = (category: 'applications' | 'illustrations' | 'websites') => {
  const data = items[category];
  if (data) {
    return data;
  }
  return notFound();
};
const Category: NextPage<Params> = ({ params }) => {
  console.log(params);
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map(item => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} alt={item.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
