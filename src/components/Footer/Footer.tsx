import styles from "./Footer.module.css";
import { IstagramIcon } from "./IstagramIcon";
import { FacebookIcon } from "./FacebookIcon";

interface Props {}

export const Footer = ({}: Props) => {
  return (
    <div
      className={`${styles.root} flex flex-row justify-between px-4 mx-auto lg:max-w-7xl md:px-8 py-8`}
    >
      <div>
        <div>Contact Us</div>
        <div className="flex flex-row">
          <a
            href="https://www.instagram.com/__easymeal__/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.bolt} mb-6 lg:mr-12`}
          >
            <IstagramIcon width={60} height={60} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100086515950120"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.bolt} mb-6 lg:mr-12`}
          >
            <FacebookIcon scale="1.4" />
          </a>
        </div>
      </div>
      <div>
        <a
          href="https://forms.gle/aJFrLZjeKdwbWrtd6"
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center px-8 py-3 text-wewak font-medium rounded-md text-gray-900 border border-wewak hover:border-beryl hover:text-white bg-white hover:bg-beryl md:py-4 md:text-lg md:px-10"
        >
          Leave Feedback
        </a>
      </div>
    </div>
  );
};
