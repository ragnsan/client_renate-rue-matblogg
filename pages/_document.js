import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    // TODO Paste the GA tracking in the string below and uncomment the code in the <Head>-tag"
    const GA_MEASUREMENT_ID = "GA_MEASUREMENT_ID";
    return (
      <Html lang="nb">
        <Head>
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          dangerouslySetInnerHTML=
          {{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `,
          }} */}
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            href="/fonts/open-sans-v26-latin-800.woff2"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
            href="/fonts/open-sans-v26-latin-800.woff"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            href="/fonts/open-sans-v26-latin-500.woff2"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
            href="/fonts/open-sans-v26-latin-500.woff"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
