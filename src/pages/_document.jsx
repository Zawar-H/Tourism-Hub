import { Html, Head, Main, NextScript } from 'next/document'
import { DefaultSeo } from 'next-seo'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <DefaultSeo
        title='Your Website Title' // TODO: Change this to your website name
      />
      <Head>
        <Script src="https://kit.fontawesome.com/2f07fc999b.js" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
