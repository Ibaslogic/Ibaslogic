import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../Footer/Footer";
import Header from "../Header";

import config from "../../data/siteMetadata.js";
import NewsTopbar from "../NewsTopbar";

const Layout = ({ children, ...customMeta }) => {
  const router = useRouter();
  const { siteName, defaultDescription, socialBanner, siteUrl, twitterHandle } =
    config;

  const meta = {
    // Please add image

    defaultImage: `${siteUrl}${socialBanner}`,
    type: "website",
    ...customMeta,
  };

  const metaDescription = meta.description
    ? meta.description
    : defaultDescription;

  const image = meta.featured ? meta.image : meta.defaultImage;

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{`${meta.title} | ${siteName}`}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="follow, index" />

        <link
          rel="canonical"
          href={
            meta.external_post
              ? meta.external_url
              : `${siteUrl}${router.asPath}`
          }
        />
        {/* Open Graph */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:title" content={meta.title} key="ogtitle" />
        <meta property="og:image" content={image} key="ogimage" />
        <meta property="og:site_name" content={siteName} />
        <meta
          property="og:description"
          content={metaDescription}
          key="ogdesc"
        />
        <meta property="og:url" content={`${siteUrl}${router.asPath}`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />
        <meta name="twitter:site" content={twitterHandle} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={image} />
        {meta.date && (
          <meta property="article:updated_time" content={meta.date} />
        )}
      </Head>
      <div className="flex-grow">
        <NewsTopbar />
        <Header />
        <>{children}</>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
