import Image from 'next/image';

import { ArrowRight } from '@s2/icons';
import CASES from '@/containers/Small-business/Cases/consts';

import styles from './Cases.module.scss';

function Card({
  title, text, image, logo,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        {logo && <div className={styles.whiteBox}>{logo}</div>}
        <Image src={image} alt="" width={364} height={180} />
      </div>
      <div className={styles.company}>
        <h2 className={styles.name}>{title}</h2>
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

function Cases() {
  return (
    <div className={styles.cards}>
      {CASES.map(({ caseTitle, caseText, image }, i) => (
        <Card
          // eslint-disable-next-line react/no-array-index-key
          key={`${i}_${caseTitle}`}
          title={caseTitle}
          text={caseText}
          image={image}
        />
      ))}
    </div>
  );
}

export default Cases;
