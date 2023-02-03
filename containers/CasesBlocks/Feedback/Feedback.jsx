import Image from 'next/image';

import Container from '@/components/Container/Container';
import styles from './Feedback.module.scss';

function Fedback() {
  return (
    <div className={styles.feedback}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.leftBlock}>
            <Image className={styles.image} src="/" alt="" width={50} height={50} />
            <p className={styles.text}>Besides improving day fk gbm igkksfdfk dsklfn vjnvjjnvgf jnbvgg ghghhhg -to-day nt for sourciplaing.</p>
            <p className={styles.author}>James Adam, Apple</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Fedback;
