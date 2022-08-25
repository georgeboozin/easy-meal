import type { NextPage } from "next";
import { Header } from "components/Header";
import { Hero } from "components/Hero";
import { Slider } from "components/Slider";
import { Benefits } from "components/Benefits";
import { Menu } from "components/Menu";
import { Footer } from "components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Slider />
      <Benefits />
      <Menu />
      <Footer />
    </>
  );
};

export default Home;
