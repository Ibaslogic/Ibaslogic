import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { pageview } from '../lib/google-analytics';

import '../styles/globals.css';
import '../styles/prism.css';
import NextProgress from 'next-progress';
import Analytics from '../components/Analytics/Analytics';

import { Source_Sans_Pro } from '@next/font/google';

const sourceSans = Source_Sans_Pro({
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-source',
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
    <div className={`${sourceSans.variable} font-base`}>
      <Analytics />
      <NextProgress delay={300} height="3px" color="#005bb3" />

      <Component {...pageProps} key={router.asPath} />
    </div>
  );
}

export default MyApp;
