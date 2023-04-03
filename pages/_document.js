// customizing the site doc
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/static/favicon.png" />
        </Head>
        <body className="bg-[white] text-[#36313d]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
