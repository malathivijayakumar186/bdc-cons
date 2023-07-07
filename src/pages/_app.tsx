import Layout from '@/Layouts'
import type { AppProps } from 'next/app'
function MyApp({ Component, pageProps }: AppProps) {
    return (

  <Layout >
  <Component {...pageProps} />
</Layout>
    )
}
export default MyApp;
