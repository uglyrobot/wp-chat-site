import 'focus-visible'
import '@/styles/tailwind.scss'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import { Router } from 'next/router'

export default function App({ Component, pageProps }) {

  useEffect(() => {
    "use strict";
    Router.events.on("routeChangeComplete", (path) => {
      setTimeout(() => {
        if (window.bento !== undefined) {
          // Note: if the user is identified or logged in, you can identify their page view by running.
          // Example: 
          // if (user) {
          //  window.bento.identify(email);
          // }
          window.bento.view();
        };
      }, 0);
    });

    return () => {
      Router.events.off('routeChangeComplete', 0);
    }
  }, [Router]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Script
        id="bento-script"
        src={'https://fast.bentonow.com?site_uuid=a72c79ffb06a248333be6e1de58f63cf'}
        strategy="afterInteractive"
      />
    </>
  )
}
