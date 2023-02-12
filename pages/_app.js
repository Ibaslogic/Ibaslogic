import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { pageview } from '../lib/google-analytics';
// import * as ga from "../lib/google-analytics";

import '../styles/globals.css';
import '../styles/prism.css';
import NextProgress from 'next-progress';
import Analytics from '../components/Analytics/Analytics';

import { Inter } from '@next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      // ga.pageview(url);
      pageview(url, document.title);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
  // }, [router.events]);

  return (
    <>
      <Analytics />
      <NextProgress delay={300} height="3px" color="#8a4baf" />
      <style jsx global>{`
        :root {
          --font-base: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} key={router.asPath} />
    </>
  );
}

export default MyApp;
