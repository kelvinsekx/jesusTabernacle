import type { AppProps } from 'next/app'
import './../components/gallery-page-css/styles.css'
// import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {/* <Analytics/> */}
    </>
    )
}