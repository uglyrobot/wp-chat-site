import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="scroll-smooth bg-white antialiased" lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
     </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
