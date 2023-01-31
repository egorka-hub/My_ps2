import Image from "next/image";
// добавил
import { useState } from "react";

import Container from "../Container/Container";
import Button from "../Button/Button";

import styles from "./Header.module.scss";

import LOGO_BLACK_SVG from "../../public/images/logo_black.svg";

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.navBar}>
            <div>
              <a>
                <span>
                  <Image
                    className={styles.logoBlack}
                    src={LOGO_BLACK_SVG}
                    alt="Logo"
                    width={128}
                    height={28}
                  />
                </span>
              </a>
            </div>


            {/* <div className={styles.headerMenu}>
              <nav className={styles.navMenu}>
                <div className={styles.menuItem}>
                  <Image src="/" alt="Call" width={16} height={16} />
                  <a className={styles.menuItem}>
                    <span>Заказать звонок</span>
                  </a>
                </div>

                <div className={styles.menuItem}>
                  <Image src="/" alt="Download" width={16} height={16} />
                  <a className={styles.menuItem}>
                    <span>Скачать презентацию</span>
                  </a>
                </div>

              </nav>
            </div> */}

            <Button title="Попробовать бесплатно" />
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
