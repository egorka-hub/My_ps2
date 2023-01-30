import Image from "next/image";
import { memo } from 'react';

import Container from "components/Container/Container";
import Button from '@/components/Button/Button';

import styles   from "./MainFirst.module.scss";

const MainFirst = () => {
  return (
    <div className={styles.background}>
      <div className={styles.main}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.leftMain}>
              <div className={styles.content}>
                <h1 className={styles.title}>
                  Всё, что вам нужно для управления бизнесом
                </h1>
                <h2 className={styles.text}>
                  Будьте всегда в курсе того, что происходит. Знайте, чего хотят
                  клиенты. Эффективно управляйте ресурсами и временем.
                  Оптимизируйте расходы. Повышайте прибыль.
                </h2>
                <div className={styles.wrapperBtns}>
                  <Button title='Попробовать бесплатно' />
                  <Button title='Заказать звонок' bordered />
                </div>
              </div>
            </div>

            <div className={styles.rightMain}>
              <Image
                className={styles.logoBlack}
                src="/"
                alt=""
                width={348}
                height={348}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default memo(MainFirst);
