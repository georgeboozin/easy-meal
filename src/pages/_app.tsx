import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleTagManager } from "../components/Scripts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager id="GTM-WJB8ZLW" />
    </>
  );
}

export default MyApp;
