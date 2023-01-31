import Container from "@/components/Container/Container";
import Card from "./Card/Card";

import styles from "./Solution.module.scss";

import { CARDS } from '@/containers/Main/Solution/consts';

const Solution = () => {
  return (
    <>
      <div className={styles.solution}>
        <Container className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.titleBlock}>
              {/* <h2 className={styles.title}>Кому подойдет:</h2> */}
              {/* <h3 className={styles.text}>
                Выберите к какому из профилей ближе всего потребности вашего
                бизнеса и посмотрите кейсы и решения, которые вам подойдут
              </h3> */}
            </div>

            <div className={styles.tasksBlock}>
              {CARDS.map(({title, questions}) => (
                <Card questions={questions} title={title} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Solution;
