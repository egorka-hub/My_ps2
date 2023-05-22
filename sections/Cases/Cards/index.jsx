import Image from 'next/image';

import { ArrowRight } from '@s2/icons';

import styles from './Cases.module.scss';

function Card({
  title, text, image, logo, category,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        {logo && <div className={styles.whiteBox}>{logo}</div>}
        <Image src={image} alt="" width={364} height={180} priority="preload" />
      </div>
      <div className={styles.company}>
        <div>
          <h2 className={styles.name}>{title}</h2>
          <p className={styles.category}>{category}</p>
        </div>
        <ArrowRight
          color="#d11152"
          width={24}
          height={25}
        />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

function Cases({ items = [] }) {
  if (!items.length) {
    return <>Ничего не найдено</>;
  }

  return (
    <div className={styles.cards}>
      {items.map(({
        title, text, image, category,
      }, i) => (
        <Card
          // eslint-disable-next-line react/no-array-index-key
          key={`${i}_${title}`}
          title={title}
          text={text}
          image={image}
          category={category}
        />
      ))}
    </div>
  );
}

export default Cases;
