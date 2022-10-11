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
      <div className="px-8 py-3">
        <div className="rounded-md my-8">
          <a
            href="#twitter"
            className="w-full flex items-center justify-center px-8 py-3 text-wewak font-medium rounded-md text-gray-900 border border-wewak hover:border-beryl hover:text-white bg-white hover:bg-beryl md:py-4 md:text-lg md:px-10"
          >
            Instagram
          </a>
        </div>
        <div className="rounded-md my-8">
          <a
            href="#twitter"
            className="w-full flex items-center justify-center px-8 py-3 text-wewak font-medium rounded-md text-gray-900 border border-wewak hover:border-beryl hover:text-white bg-white hover:bg-beryl md:py-4 md:text-lg md:px-10"
          >
            Facebook
          </a>
        </div>
        <div className="rounded-md my-8">
          <a
            href="#twitter"
            className="w-full flex items-center justify-center px-8 py-3 text-wewak font-medium rounded-md text-gray-900 border border-wewak hover:border-beryl hover:text-white bg-white hover:bg-beryl md:py-4 md:text-lg md:px-10"
          >
            Feedback
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
