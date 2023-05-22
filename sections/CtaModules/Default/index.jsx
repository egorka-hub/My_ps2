import { memo, useCallback, useState } from 'react';
import Image from 'next/image';

import Button from '@/components/Button/Button';
import Popup from '@/components/Popup';

import LOGO_BLACK from '@/public/images/logo_black.svg';
import VIDEO_IMG from '../../../public/images/video-screen.jpg';
import VIDEO_START from '../../../public/images/play_white.svg';

import styles from './index.module.scss';

function Index(props) {
  const {title} = props.data

  const [isOpened, setIsOpened] = useState(false);

  const handleClose = useCallback(() => setIsOpened(false), []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <Image src={LOGO_BLACK} alt="" width={116} height={27} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftBlock}>
            <h1 className={styles.title}>Всё, что вам нужно для управления бизнесом</h1>
            <p className={styles.text}>
              Будьте всегда в курсе того, что происходит. Знайте, чего хотят клиенты. Эффективно управляйте ресурсами и
              временем. Оптимизируйте расходы.
            </p>
            <div className={styles.btns}>
              <Button
                title="Попробовать бесплатно"
                className={styles.btn}
              />
              <Button title="Заказать звонок" bordered />
            </div>
            <div className={styles.categories}>
              {/* {CAT.map((obj, i) => ( */}
              {/*   // eslint-disable-next-line react/no-array-index-key */}
              {/*   <div key={`${i}_cat`} className={styles.category}> */}
              {/*     {obj} */}
              {/*   </div> */}
              {/* ))} */}
            </div>
          </div>
          <div className={styles.rightBlock}>
            <Image src={VIDEO_IMG} alt="" width={453} height={300} className={styles.videoImg} />
            <div className={styles.startBtn} onClick={() => setIsOpened(true)}>
              {/* <Image src={VIDEO_START} alt="" width={30} height={30} className={styles.watchBtn} /> */}
              <Image src={VIDEO_START} alt="" width={30} height={30} className={styles.watchIcon} />
              <div className={styles.startText}>Посмотреть демо-видео</div>
            </div>
          </div>
        </div>
        {isOpened && (
          <Popup close={handleClose}>
            <iframe
              width="1000"
              height="560"
              src="https://www.youtube.com/embed/mvqI0bJoYms"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </Popup>
        )}
      </div>
    </div>
  );
}

export default memo(Index);
