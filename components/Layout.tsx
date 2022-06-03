import React from 'react';
import Header from './Header';
import NavMenu from './NavMenu';
import Footer from './Footer'

const Layout = ({ children }) => (
  <>
    <NavMenu />
      <Header />
    {children}
    <Footer />
  </>
);

export default Layout;