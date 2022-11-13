import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "components/HeaderWithLocale";
import { MultiLink } from "components/MultiLink";
import { useEffect } from "react";
import { gtmVirtualPageView } from "../services/analytics";

const MultiLinkPage: NextPage = () => {
  useEffect(() => {
    gtmVirtualPageView({ page: "multilink" });
  }, []);

  return (
    <>
      <Head>
        <title>Easy Meal | Multilink</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Easy Meal | Food Boxes | Delivery | Tbilisi"
        />
      </Head>
      <Header />
      <MultiLink />
    </>
  );
};

export default MultiLinkPage;
