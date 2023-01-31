import Image from "next/image";
import { memo } from "react";

import Container from "components/Container/Container";
import Button from "@/components/Button/Button";

import styles from "./MainFirst.module.scss";

const MainFirst = () => {
  return (
    <div className={styles.background}>
      <div className={styles.main}>
        <Container className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.leftMain}>
              <div className={styles.content}>
                <h1 className={styles.title}>
                  Облачная система для полного контроля над вашим
                  бизнесом
                </h1>
                <h2 className={styles.text}>
                  Объединяем продажи, проекты, производство, финансы, документы
                  и склад
                </h2>
                <div className={styles.wrapperBtns}>
                  <Button title="Попробовать бесплатно" className={styles.btn}/>
                  <Button title="Заказать звонок" bordered />
                </div>
              </div>
            </div>

            <div className={styles.rightMain}>
              <iframe className={styles.video}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/mvqI0bJoYms"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default memo(MainFirst);
