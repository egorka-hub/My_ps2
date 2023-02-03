import Container from '@/components/Container/Container';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Fields.module.scss';

const FIELDS = [
  {
    id: 0,
    url: '/',
    title: 'Онлайн-образование',
    image: '/',
  },
  {
    id: 1,
    url: '/',
    title: 'Онлайн-образование',
    image: '/',
  },
  {
    id: 2,
    url: '/',
    title: 'Логистика',
    image: '/',
  },
  {
    id: 3,
    url: '/',
    title: 'Сфера услуг',
    image: '/',
  },
  {
    id: 4,
    url: '/',
    title: 'Производство',
    image: '/',
  },
  {
    id: 5,
    url: '/',
    title: 'Медицина',
    image: '/',
  },
];
function Fields() {
  return (
    <div className={styles.fields}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>S2 подходит для различных сфер бизнеса</h2>

          <div className={styles.items}>
            {FIELDS.map(({
              title, image, url, id,
            }) => (
              <div key={id} className={styles.item}>
                <Image src={image} alt={title} width={30} height={30} />
                <Link href={url} className={styles.link}>{title}</Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Fields;
