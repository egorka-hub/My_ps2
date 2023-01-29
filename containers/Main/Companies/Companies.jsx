import Image from "next/image";

import Container from "@/components/Container/Container";

import styles from "./Companies.module.scss";

import { companies } from "./consts";

const Companies = () => {
  return (
    <>
      <div className={styles.companies}>
        <Container>
          <div className={styles.wrapper}>
            <h2 className={styles.text}>
              1500+ компаний уже стали клиентами S2 ERP
            </h2>

            <div className={styles.imgBlock}>
             {companies.map(({image, width, height}, i) => (
               <a>
               <span >
                 <Image
                   key={i}
                   className={styles.img}
                   src={image}
                   alt="company"
                   width={width}
                   height={height}
                 />
               </span>
             </a>
             ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Companies;


