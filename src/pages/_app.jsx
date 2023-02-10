import 'focus-visible'
import '@/styles/tailwind.scss'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      if (window.bento !== undefined) {
        window.bento.view()
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/social-card.png"/>
        <meta property="og:image:width" content="1684"/>
        <meta property="og:image:height" content="946"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#ffc40d"/>
        <meta name="theme-color" content="#ffffff"></meta>
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
