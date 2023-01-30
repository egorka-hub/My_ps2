import Container from "@/components/Container/Container";
import Card from "./Card/Card";

import styles from "./Solution.module.scss";

import { Card1, Card2, Card3, Title1, Title2, Title3 } from "./Card/consts";

const Solution = () => {
  return (
    <>
      <div className={styles.solution}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.titleBlock}>
              {/* <h2 className={styles.title}>Кому подойдет:</h2> */}
              {/* <h3 className={styles.text}>
                Выберите к какому из профилей ближе всего потребности вашего
                бизнеса и посмотрите кейсы и решения, которые вам подойдут
              </h3> */}
            </div>

            <div className={styles.tasksBlock}>
              <Card questions={Card1} titles={Title1}/>
              <Card questions={Card2} titles={Title2}/>
              <Card questions={Card3} titles={Title3}/>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Solution;
