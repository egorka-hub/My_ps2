import Head     from 'next/head';
import { memo } from 'react';

const MetaData = ({title, description}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      {description && <meta name="description" content={description}/>}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    )
}

export default memo(MetaData);
