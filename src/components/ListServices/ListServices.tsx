import Link from "next/link";
import { useRouter } from "next/router";
import i18n from "./assets/i18n.json";

import styles from "./ListServices.module.css";

interface Props {}

export const ListServices = ({}: Props) => {
  const { locale } = useRouter();

  // const links = i18n[locale as "en" | "ge" | "ru"].links.map((link) => (
  //   <div key={link.title} className="rounded-md my-8">
  //     <a
  //       href={link.href}
  //       target="_blank"
  //       rel="noreferrer"
  //       className="w-full flex items-center justify-center px-8 py-3 text-wewak font-medium rounded-md text-gray-900 border border-wewak hover:border-beryl hover:text-white bg-white hover:bg-beryl md:py-4 md:text-lg md:px-10"
  //     >
  //       {link.title}
  //     </a>
  //   </div>
  // ));

  return (
    <div className="px-8 py-3 lg:max-w-7xl mx-auto flex items-center flex-col lg:flex-row mt-8">
      <a
        href="https://glovoapp.com/ge/en/tbilisi/daily-box-tbi/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.glovo} mb-6`}
      ></a>
      <a
        href="https://food.bolt.eu/ru-RU/15-tbilisi/p/54194-easy-meal?fbclid=PAAaZv0kZr9P5C8Fu4f7BM5QyPy6nWtVpRdo-JvL25b0Fcg9xjqoEn7yYU154"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.bolt} mb-6`}
      ></a>
      <a
        href="https://wolt.com/ka/geo/tbilisi/restaurant/easy-meal?fbclid=PAAabGlpXC3omUJiiuj4ZBizUBB9UDzMm7ho0X6sySHeVkULzaBlbi6qL4bNs"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.wolt} mb-6`}
      ></a>
    </div>
  );
};
