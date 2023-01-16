import type { NextPage } from "next";
import { Header } from "features/landing/Header";
import { Hero } from "features/landing/Hero";
import { Menu } from "features/landing/Menu";
import { Instagram } from "features/landing/Instagram";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <Instagram />
    </>
  );
};

export default Home;
