import { memo, useCallback, useState } from 'react';
import Image from 'next/image';

import { getStrapiMedia } from '@/utils/media';
import Container from '@/components/Container/Container';
import Button from '@/components/Button/Button';
import Popup from '@/components/Popup';

import VIDEO_START from '../../public/images/video-start.png';

import styles from './index.module.scss';

function Start(props) {
  const {
    header, description, buttons, picture
  } = props.data;

  const [isOpened, setIsOpened] = useState(false);

  const handleClose = useCallback(() => setIsOpened(false), []);

  return (
    <>
      <div className={styles.start}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.leftBlock}>
              <h1 className={styles.title}>{header}</h1>
              <div className={styles.startBlock} onClick={() => setIsOpened(true)}>
                <Image src={VIDEO_START} alt="" width={40} height={40} className={styles.watchBtn} />
                {buttons[2]?.text && <div className={styles.startText}>{buttons[2].text}</div>}
                <Image
                  src={getStrapiMedia(picture.data[0].attributes.url)}
                  height={picture.data[0].attributes.height}
                  width={picture.data[0].attributes.width}
                  alt={picture.data[0].attributes.alternativeText}
                  className={styles.roundLine}
                />
              </div>
              <p className={styles.text}>
                {description}
              </p>
              <div className={styles.btns}>
                {buttons[0]?.text && <Button
                  title={buttons[0].text}
                  type={buttons[0].type}
                  className={styles.btn}
                />}
                {buttons[1]?.text && <Button title={buttons[1].text} type={buttons[1].type} bordered/>}
              </div>
            </div>
          </div>
        </Container>
      </div>
      {isOpened && (
      <Popup close={handleClose}>
        <iframe
          width="672"
          height="378"
          src="https://www.youtube.com/embed/mvqI0bJoYms"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </Popup>
      )}
    </>
  );
}

export default memo(Start);
