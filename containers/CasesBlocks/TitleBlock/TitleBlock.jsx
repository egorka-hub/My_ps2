import Container from '@/components/Container/Container';

import styles from './TitleBlock.module.scss';

function TitleBlock() {
  return (
    <div className={styles.titleBlock}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>ЗАГОЛОВОК ЗАГОЛОВОК</h2>
        </div>
      </Container>
    </div>
  );
}

export default TitleBlock;
