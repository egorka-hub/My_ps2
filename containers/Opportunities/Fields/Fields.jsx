import Container from '@/components/Container/Container';
import styles from './Fields.module.scss';

function Fields() {
  return (
    <div className={styles.fields}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>S2 подходит для различных сфер бизнеса</h2>
        </div>
        <div className={styles.items}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
      </Container>
    </div>
  );
}

export default Fields;
