import c from 'classnames';
import Image from 'next/image';
import Container from '@/components/Container/Container';

import styles from './Blocks.module.scss';

function Blocks({ isReverse, title, text }) {
  return (
    <Container>
      <div className={c(styles.wrapper, { [styles.reverse]: isReverse })}>
        <div className={styles.leftBlock}>
          <Image
            style={styles.images}
            src="/"
            alt=""
            width={540}
            height={322}
          />
        </div>

        <div className={styles.rightBlock}>
          <div className={styles.line} />
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.text}>
            {text}
          </h3>
        </div>
      </div>
    </Container>
  );
}

export default Blocks;
