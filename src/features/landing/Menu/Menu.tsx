import Link from "next/link";

import s from "./Menu.module.css";

interface Props {}

export const Menu = ({}: Props) => {
  return (
    <div className="mx-auto lg:max-w-7xl">
      <div className="flex items-center justify-between pt-8 px-4 lg:px-8">
        <p id="menu" className="text-5xl">
          Menu
        </p>
        <div>
          <Link href="/order">
            <a className="w-full flex items-center justify-center px-4 py-2 text-wewak font-medium rounded-md text-gray-900 border border-black  bg-white hover:shadow-lg">
              Make Order
            </a>
          </Link>
        </div>
      </div>

      <div className="flex font-lato overflow-auto py-8 px-4 lg:px-8">
        <div className="cluster">
          <div className="flex mb-8">
            <div className={`${s.card}`}>
              <img src="/menu/falafel.png" loading="lazy" alt="falafel" />
            </div>
            <div className={`${s.card}`}>
              <img
                src="/menu/salad-mchadi.png"
                loading="lazy"
                alt="salad-mchadi"
              />
            </div>
          </div>
          <div className="flex">
            <div className={`${s.card}`}>
              <img
                src="/menu/spring-roll.png"
                loading="lazy"
                alt="spring-roll"
              />
            </div>
            <div className={`${s.card}`}>
              <img
                src="/menu/mchadi-pkhali-lobio.png"
                loading="lazy"
                alt="mchadi-pkhali-lobio"
              />
            </div>
          </div>
        </div>

        <div className="cluster">
          <div className="flex mb-8">
            <div className={`${s.card}`}>
              <img src="/menu/sandwich.png" loading="lazy" alt="sandwich" />
            </div>
            <div className={`${s.card}`}>
              <img
                src="/menu/chicken-salad.png"
                loading="lazy"
                alt="chicken-salad"
              />
            </div>
          </div>
          <div className="flex">
            <div className={`${s.card}`}>
              <img
                src="/menu/scramble-with-vegetables.png"
                loading="lazy"
                alt="scramble-with-vegetables"
              />
            </div>
            <div className={`${s.card}`}>
              <img
                src="/menu/pkhali-beans-salad.png"
                loading="lazy"
                alt="pkhali-beans-salad"
              />
            </div>
          </div>
        </div>

        <div className="cluster">
          <div className="flex mb-8">
            <div className={`${s.card}`}>
              <img
                src="/menu/english-breakfast.png"
                loading="lazy"
                alt="english-breakfast"
              />
            </div>
            <div className={`${s.card}`}>
              <img
                src="/menu/quinoa-salad.png"
                loading="lazy"
                alt="quinoa-salad"
              />
            </div>
          </div>
          <div className="flex">
            <div className={`${s.card}`}>
              <img
                src="/menu/french-breakfast.png"
                loading="lazy"
                alt="french-breakfast"
              />
            </div>
            <div className={`${s.card}`}>
              <img
                src="/menu/chicken-poke.png"
                loading="lazy"
                alt="chicken-poke"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
