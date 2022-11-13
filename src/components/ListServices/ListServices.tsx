import { useRouter } from "next/router";
import i18n from "./assets/i18n.json";
import { Copy } from "components/Copy";
import styles from "./ListServices.module.css";

interface Props {}

export const ListServices = ({}: Props) => {
  const { locale } = useRouter();

  const messages = i18n[locale as "en" | "ge" | "ru"];

  const handleOpenService = (service: "bolt" | "wolt" | "glovo") => () => {
    console.log(service);
  };

  return (
    <>
      <div className="px-4 flex items-center flex-col mt-6 content-center">
        <h2 className="text-2xl mb-8">{messages.title}</h2>
      </div>
      <div className="px-8 lg:max-w-7xl mx-auto flex items-center flex-col lg:flex-row mt-6 lg:justify-center">
        <a
          href="https://food.bolt.eu/ru-RU/15-tbilisi/p/54194-easy-meal?fbclid=PAAaZv0kZr9P5C8Fu4f7BM5QyPy6nWtVpRdo-JvL25b0Fcg9xjqoEn7yYU154"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleOpenService("bolt")}
          className={`${styles.bolt} mb-6 lg:mr-12`}
        ></a>
        <a
          href="https://wolt.com/ka/geo/tbilisi/restaurant/easy-meal?fbclid=PAAabGlpXC3omUJiiuj4ZBizUBB9UDzMm7ho0X6sySHeVkULzaBlbi6qL4bNs"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleOpenService("wolt")}
          className={`${styles.wolt} mb-6 lg:mr-12`}
        ></a>
        <a
          href="https://glovoapp.com/ge/en/tbilisi/daily-box-tbi/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleOpenService("glovo")}
          className={`${styles.glovo} mb-6 lg:mr-12`}
        ></a>
      </div>
      <div className="px-8 lg:max-w-7xl mx-auto flex items-center flex-row justify-center">
        <span>
          {messages.glovoHelper} <Copy text="Easy Meal" />
        </span>
      </div>
      <div className="mb-24"></div>
    </>
  );
};
