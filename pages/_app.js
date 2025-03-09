import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import {useRouter} from 'next/router';

export default function App({ Component, pageProps }) {
  const location = useRouter().pathname;
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <NextNProgress color="rgba(1, 65, 255, 0.4)" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      {/* <Navbar /> */}
      {location !== "/_error" && <Navbar />}
      <Component {...pageProps} />
      {location !== "/_error" && <Footer />}
    </>
  );
}
