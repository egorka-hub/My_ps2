import Button from '@/components/Button/Button';

import styles from "./Card.module.scss";

const Card = ({title}) => {

  return (
    <>
      <div className={styles.task}>
        <div className={styles.wrapper}>
          <p className={styles.title}>{title ? title : 'Для тех, кто только начинает работать'}</p>
          <div className={styles.questions}>
            <div className={styles.question}>Вы работаете недавно?</div>
            <div className={styles.question}>У вас уже есть клиентская база?</div>
            <div className={styles.question}>Есть несколько сотрудников?</div>
            <div className={styles.question}>Переживаете по поводу конкурентов?</div>
            <div className={styles.question}>Ищете возможность для роста?</div>
            <div className={styles.question}>Понимаете, что нужно что-то менять?</div>
          </div>

          <Button
            title='Посмотреть решения'
            className={styles.btn}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
