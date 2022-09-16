import Head from 'next/head';
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import 'bootstrap/dist/css/bootstrap.min.css';

const activeChainId: number = parseInt(`${process.env.NEXT_PUBLIC_CHAIN_ID}`)


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
        <Head>
          <title>Next.js</title>
        </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
