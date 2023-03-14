import 'focus-visible'
import '@/styles/tailwind.scss'
import Head from 'next/head'

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:url" content="https://wpdocs.chat/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="ChatWP - The WordPress docs chatbot"/>
        <meta property="og:description" content="I'm an AI chatbot that gives direct answers to your WordPress questions. I've been trained on all the official WordPress documentation and will do my best to answer your questions accurately and truthfully."/>
        <meta property="og:image" content="https://wpdocs.chat/social-card.png"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="wpdocs.chat"/>
        <meta property="twitter:url" content="https://wpdocs.chat/"/>
        <meta name="twitter:title" content="ChatWP - The WordPress docs chatbot"/>
        <meta name="twitter:description" content="I'm an AI chatbot that gives direct answers to your WordPress questions. I've been trained on all the official WordPress documentation and will do my best to answer your questions accurately and truthfully."/>
        <meta name="twitter:image" content="https://wpdocs.chat/social-card.png"/>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#ffc40d"/>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
