import Image from 'next/image';

import Container from '@/components/Container/Container';

import styles from './Examples.module.scss';

import CASES from './consts';

function Examples() {
  return (
    <div className={styles.examples}>
      <Container>
        <div className={styles.wrapper}>
          {CASES.map(({ title, text }) => (
            <div className={styles.example}>
              <div className={styles.leftBlock}>
                <Image src="/" alt="" width={310} height={310} />
              </div>
              <div className={styles.rightBlock}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.text}>
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Examples;
