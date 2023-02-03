import Image from 'next/image';

import Container from '@/components/Container/Container';

import styles from './FirstBlock.module.scss';

function FirstBlock() {
  return (
    <div className={styles.firstBlock}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.leftBlock}>
            <h2 className={styles.title}>Самая быстрая разработка и миграция на отечественном рынке</h2>
            <h3 className={styles.text}>
              Безграничные
              <span className={styles.coloredText}> возможности </span>
              для настройки и доработки под ваши требования
            </h3>
          </div>
          <div className={styles.rightBlock}>
            <Image style={styles.images} src="/" alt="" width={300} height={300} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FirstBlock;
