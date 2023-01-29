import { memo } from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'optional'
})

const Layout = ({ children }) => {
  return (
    <div className={roboto.className}>
      <Header/>
      {children}
      <Footer/>
    </div>
  );
};

export default memo(Layout);
