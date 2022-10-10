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
      <div className="rounded-md shadow">
        <a
          href="#twitter"
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-off font-medium rounded-md text-gray-900 border border-main bg-white hover:bg-main md:py-4 md:text-lg md:px-10"
        >
          Share on Twitter
        </a>
      </div>
    </>
  );
};

export default Home;
