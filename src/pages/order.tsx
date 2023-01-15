import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "components/HeaderWithLocale";
import { ListServices } from "components/ListServices";
import { Footer } from "components/Footer";
import { useEffect } from "react";
import { gtmVirtualPageView } from "../services/analytics";

const OrderPage: NextPage = () => {
  useEffect(() => {
    gtmVirtualPageView({ page: "order" });
  }, []);

  return (
    <>
      <Head>
        <title>Easy Meal | Order</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Easy Meal | Food Boxes | Delivery | Tbilisi"
        />
      </Head>
      <Header />
      <ListServices />
      <Footer />
    </>
  );
};

export default OrderPage;
