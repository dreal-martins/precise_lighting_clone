import Head from 'next/head';
import React from 'react';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>Precise Lighting</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
