import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import Head from 'next/head';
import NextTopLoader from 'nextjs-toploader';
import {useRouter} from 'next/router';

export default function App({ Component, pageProps }) {
  const location = useRouter().pathname;
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes='any' />
      </Head>
      <NextTopLoader color="rgba(1, 65, 255, 0.4)" initialPosition={0.3} height={3} speed={200} />
      {/* <Navbar /> */}
      {location !== "/_error" && <Navbar />}
      <Component {...pageProps} />
      {location !== "/_error" && <Footer />}
    </>
  );
}
