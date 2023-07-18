import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
         <Script strategy="lazyOnload"
            crossOrigin="anonymous" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9978927393009784" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
