import '@/styles/global.css'
import type { AppProps } from 'next/app'
import Layout from './Components/Layout/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
