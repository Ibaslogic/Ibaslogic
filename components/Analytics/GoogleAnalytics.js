import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        async
        strategy="lazyOnload" // another strategy : afterInteractive
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {/* id="google-analytics-script" */}
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
