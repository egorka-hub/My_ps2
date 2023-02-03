import Container from '@/components/Container/Container';
import Image from 'next/image';
import styles from './Fields.module.scss';

function Fields() {
  return (
    <div className={styles.fields}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>S2 подходит для различных сфер бизнеса</h2>

          <div className={styles.items}>
            <div className={styles.item}>
              <Image src="/" alt="" width={30} height={30} />
              <a className={styles.field}>Онлайн-образование</a>
            </div>
            <div className={styles.item}>
              <Image src="/" alt="" width={30} height={30} />
              <a className={styles.field}>Онлайн-образование</a>
            </div>
            <div className={styles.item}>
              <Image src="/" alt="" width={30} height={30} />
              <a className={styles.field}>Логистика</a>
            </div>
            <div className={styles.item}>
              <Image src="/" alt="" width={30} height={30} />
              <a className={styles.field}>Сфера услуг</a>
            </div>
            <div className={styles.item}>
              <Image src="/" alt="" width={30} height={30} />
              <a className={styles.field}>Производство</a>
            </div>
            <div className={styles.item}>
              <Image src="/" alt="" width={30} height={30} />
              <a className={styles.field}>Медицина</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Fields;
