import Image from "next/image";

import Container from "../Container/Container";

import styles from "../../components/Copyright/Copyright.module.scss";

import VK_SVG from "../../public/images/sns/vk.svg";
import FACEBOOK_SVG from "../../public/images/sns/facebook.svg";
import INSTA_SVG from "../../public/images/sns/insta.svg";
import YOUTUBE_SVG from "../../public/images/sns/youtube.svg";

const socials = [
  {
    styles: { width: "22px", height: "14px" },
    image: VK_SVG,
    label: "Vk",
  },
  {
    styles: { width: "18px", height: "18px" },
    image: FACEBOOK_SVG,
    label: "Facebook",
  },
  {
    styles: { width: "18px", height: "18px" },
    image: INSTA_SVG,
    label: "Instagram",
  },
  {
    styles: { width: "22px", height: "14px" },
    image: YOUTUBE_SVG,
    label: "YouTube",
  },
];

const Copyright = () => {
  return (
    <>
      <div className={styles.copyright}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.crText}>
              © Salesapiens 2015–2023. Все права защищены
            </div>
            <div className={styles.media}>
              {socials.map(({ styles, image, label }) => (
                <a key={label}>
                  <Image style={styles} src={image} alt={label} />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Copyright;


