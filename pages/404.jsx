import { memo } from 'react'

import Error404 from '@/containers/404';
import MetaData from '@/components/MetaData/MetaData';

const Error = () => {
  return (
    <>
      <MetaData title='404' />
      <Error404 />
    </>
  );
};

export default memo(Error);
