import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleTagManager } from "../components/Scripts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Lato"
        rel="stylesheet"
      ></link>
      <Component {...pageProps} />
      <GoogleTagManager id="GTM-WJB8ZLW" />
    </>
  );
}

export default MyApp;
