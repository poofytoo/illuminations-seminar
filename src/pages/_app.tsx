import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MIT Illuminations Seminar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content="https://learn.illuminations.mit.edu" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="MIT Illuminations Seminar" />
        <meta
          property="og:description"
          content="Dynamic Light Installation at the MIT Welcome Center"
        />
        <meta
          property="og:image"
          content="https://learn.illuminations.mit.edu/images/illuminations-banner.png"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-33WCQX8NDP"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-33WCQX8NDP');`,
          }}
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
