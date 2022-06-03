import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import './styles.css'
import React from 'react';
import Head from 'next/head';

import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className='jes'>
    <Layout>
      <Component {...pageProps} />
    </Layout></div>
  </>
  );
}

export default MyApp;