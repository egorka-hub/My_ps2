import Button from '@/components/Button/Button';

import styles from './Card.module.scss';

function Card({ questions, title }) {
  return (
    <div className={styles.task}>
      <div className={styles.wrapper}>
        <p className={styles.title}>
          {title}
        </p>
        <div className={styles.questions}>
          {questions.map((q, i) => (
            <div key={i} className={styles.question}>
              {q}
            </div>
          ))}
        </div>
      </div>
      <Button title="Узнать подробнее" className={styles.btn} />
    </div>
  );
}

export default Card;
