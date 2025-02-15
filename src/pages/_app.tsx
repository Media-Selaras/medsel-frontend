import '@/styles/globals.css';
import '@/styles/nprogress.css';
import NProgress from 'nprogress';
import Router from "next/router";
import type { AppProps } from 'next/app';
import React from 'react';
import Comingsoonpage from './coming-soon';

const isComingSoon = true; // Ganti ke false jika ingin menampilkan halaman utama

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return isComingSoon ? <Comingsoonpage /> : <Component {...pageProps} />;
}

export default MyApp;
