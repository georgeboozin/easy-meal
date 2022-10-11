import Link from "next/link";
import { useRouter } from "next/router";
import i18n from "./assets/i18n.json";

import styles from "./MultiLink.module.css";

interface Props {}

export const MultiLink = ({}: Props) => {
  const { locale, locales, asPath, pathname, query, push } = useRouter();
  console.log(locale, locales, asPath);
  const links = i18n[locale as "en" | "ge" | "ru"].links.map((link) => (
    <div key={link.title} className="rounded-md my-8">
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className="w-full flex items-center justify-center px-8 py-3 text-wewak font-medium rounded-md text-gray-900 border border-wewak hover:border-beryl hover:text-white bg-white hover:bg-beryl md:py-4 md:text-lg md:px-10"
      >
        {link.title}
      </a>
    </div>
  ));

  return <div className="px-8 py-3">{links}</div>;
};
