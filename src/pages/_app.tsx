import '@/styles/globals.css'
import '@/styles/nprogress.css'
import NProgress from 'nprogress'
import Router from "next/router";
import type { AppProps } from 'next/app'
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    NProgress.configure({ showSpinner: false });
    
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
