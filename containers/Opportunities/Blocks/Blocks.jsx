import Image from 'next/image';
import Container from '@/components/Container/Container';
import styles from './Blocks.module.scss';

function Blocks() {
  return (
    <div className={styles.firstBlock}>
      <Container>
        <div className={styles.wrapper}>
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
            <h2 className={styles.title}>Не теряйте клиентов</h2>
            <h3 className={styles.text}>
              Автоматически собирайте заявки с сайта, почты, телефона и
              социальных сетей в одно место и общайтесь там, где вам удобно
            </h3>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Blocks;

  <div className={styles.blocks}>
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.leftBlock}>
          <div>
            <Image
              style={styles.images}
              src="/"
              alt=""
              width={540}
              height={322}
            />
          </div>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.textBlock}>
            <div className={styles.line} />
            <h2>Не теряйте клиентов</h2>
            <h3>
              Автоматически собирайте заявки с сайта, почты, телефона и социальных
              сетей в одно место и общайтесь там, где вам удобно
            </h3>
          </div>
        </div>
      </div>
    </Container>
  </div>;
