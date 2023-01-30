import Button from "@/components/Button/Button";

import styles from "./Card.module.scss";


const Card = ({ title, questions }) => {
  return (
    <>
      <div className={styles.task}>
        <div className={styles.wrapper}>
          <p className={styles.title}>
            {title
              ? title
              : "Малому бизнесу, который сталкивается с проблемами роста"}
          </p>
          <div className={styles.questions}>
            {questions.map((q, i) => (
              <div key={i} className={styles.question}>{q}</div>
            ))}
          </div>

          <Button title="Посмотреть решения" className={styles.btn} />
        </div>
      </div>
    </>
  );
};

export default Card;


