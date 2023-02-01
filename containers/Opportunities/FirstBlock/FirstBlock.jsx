import Image from 'next/image';

import Container from '@/components/Container/Container';

import styles from './FirstBlock.module.scss';

function FirstBlock() {
  return (
    <div className={styles.firstBlock}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.leftBlock}>
            <h2 className={styles.title}>Быстрая, гибкая и удобная CRM</h2>
            <h3 className={styles.text}>
              Начните работать
              <span className={styles.coloredText}> системно </span>
              в любой сфере бизнеса
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
