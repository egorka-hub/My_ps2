import Container from '@/components/Container/Container';
import Button from '@/components/Button/Button';

import styles from './Try.module.scss';

function Try() {
  return (
    <div className={styles.try}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.leftBlock}>
            <h2 className={styles.title}>Хотите увидеть S2 в действии?</h2>
            <p className={styles.text}>
              Узнайте, почему свыше 45 000 клиентов выбирают S2 для работы
              каждый день
            </p>
          </div>

          <div className={styles.rightBlock}>
            <Button className={styles.btn} title="Попробовать бесплатно" />
            <p className={styles.btnText}>Полный доступ на 14 дней</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Try;
