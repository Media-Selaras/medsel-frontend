import '@/styles/globals.css'
import '@/styles/nprogress.css'
import NProgress from 'nprogress'
import Router from "next/router";
import type { AppProps } from 'next/app'
import React from 'react';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.push('/coming-soon');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;