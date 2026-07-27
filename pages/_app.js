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
      <NextTopLoader color="#5ec8e0" initialPosition={0.3} height={2.5} showSpinner={false} speed={200} />
      {location !== "/_error" && location !== "/toaahana" && <Navbar />}
      <Component {...pageProps} />
      {location !== "/_error" && location !== "/toaahana" && <Footer />}
    </>
  );
}
