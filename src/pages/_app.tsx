import '@/styles/globals.css'
import '@/styles/nprogress.css'
import NProgress from 'nprogress'
import Router from "next/router";
import type { AppProps } from 'next/app'
import React from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

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

  // Redirect ke halaman "Coming Soon"
  React.useEffect(() => {
    if (router.pathname !== "/coming-soon") {
      router.replace("/coming-soon");
    }
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
