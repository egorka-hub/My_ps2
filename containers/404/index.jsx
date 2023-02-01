import { useRouter } from 'next/router';
import {
  memo,
  useEffect,
  useState,
} from 'react';

const REDIRECT_TIME = 3;

function Error404() {
  const [time, setTime] = useState(REDIRECT_TIME);

  const router = useRouter();

  useEffect(() => {
    if (time === 0) {
      router.push('/');
    }
    const interval = setInterval(
      () => setTime((prev) => prev - 1),
      1000,
    );
    return () => clearInterval(interval);
  }, [time]);

  return (
    <h1>Ошибка 404: Страница не найдена</h1>
  );
}

export default memo(Error404);
