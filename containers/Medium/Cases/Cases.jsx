import Image from 'next/image';

import Container from '@/components/Container/Container';
import styles from './Cases.module.scss';

function Cases({ caseTitle, caseText }) {
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
                <h2 className={styles.name}>{caseTitle}</h2>
                <p className={styles.text}>
                  {caseText}
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
