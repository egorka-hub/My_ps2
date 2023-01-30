import Button from "@/components/Button/Button";

import styles from "./Card.module.scss";

const Card = ({ questions, titles }) => {
  return (
    <>
      <div className={styles.task}>
        <div className={styles.wrapper}>
          {titles.map((t, i) => (
            <p key={i} className={styles.title}>
            {t}
          </p>
          ))}
          
          <div className={styles.questions}>
            {questions.map((q, i) => (
              <div key={i} className={styles.question}>
                {q}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.btns}>
          <Button title="Узнать подробнее" className={styles.btn} />
        </div>
      </div>
    </>
  );
};

export default Card;
