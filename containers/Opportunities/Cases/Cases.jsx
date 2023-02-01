import Image from "next/image";

import Container from "@/components/Container/Container";
import styles from "./Cases.module.scss";

function Cases() {
  return (
    <div className={styles.cases}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.casesBlock}>
            <div className={styles.case}>
              <div className={styles.leftBlock}>
                <Image src="/" alt="" width={290} height={290} />
              </div>
              <div className={styles.rightBlock}>
                <h2 className={styles.name}>Логистический центр МИР</h2>
                <p className={styles.text}>
                  Как онлайн-школа профессиональной переподготовки ускорила
                  оформление сделок на 73%
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Cases;
