import type { NextPage } from "next";
import Head from "next/head";
import { StrictMode } from "react";
import { Header } from "features/landing/Header";
import { Hero } from "features/landing/Hero";
import { Menu } from "features/landing/Menu";
import { Instagram } from "features/landing/Instagram";
import { Map } from "features/landing/Map";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Easy Meal | Food Delivery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Easy Meal | Food Boxes | Delivery | Tbilisi"
        />
      </Head>
      <StrictMode>
        <Header />
        <Hero />
        <Menu />
        <Instagram />
      </StrictMode>
      <Map />
    </>
  );
};

export default Home;
