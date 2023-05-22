import cn from 'classnames';
import Image from 'next/image';

import Container from '../Container/Container';
import Copyright from '../Copyright/Copyright';

import styles from './Footer.module.scss';

import LOGO_WHITE_SVG from '../../public/images/logo_white.svg';

import {
  company, documents, partners, start,
} from './consts';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.leftFooter}>
            <div className={styles.logoBlock}>
              <a>
                <span>
                  <Image
                    className={styles.logoWhite}
                    src={LOGO_WHITE_SVG}
                    alt="Logo"
                    width={128}
                    height={28}
                  />
                </span>
              </a>
            </div>
          </div>

          <div className={styles.rightFooter}>
            <div className={styles.menuItems}>
              <div className={styles.menuItem}>
                <h3 className={styles.menuName}>Компания</h3>
                <ul className={styles.blockList}>
                  {company.map(({ title }) => (
                    <li key={title} className={styles.menuList}>
                      <a className={styles.linkItems}>{title}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={cn(styles.menuItem, styles.documents)}>
                <h3 className={styles.menuName}>Документы</h3>
                <ul className={styles.blockList}>
                  {documents.map(({ title }) => (
                    <li key={title} className={styles.menuList}>
                      <a className={styles.linkItems}>{title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.menuItems}>
              <h3 className={styles.menuName}>Партнерам</h3>
              <ul className={styles.blockList}>
                {partners.map(({ title }) => (
                  <li key={title} className={styles.menuList}>
                    <a className={styles.linkItems}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.menuItems}>
              <h3 className={styles.menuName}>С чего начать</h3>
              <ul className={styles.blockList}>
                {start.map(({ title }) => (
                  <li key={title} className={styles.menuList}>
                    <a className={styles.linkItems}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Copyright />
    </footer>
  );
}

export default Footer;
