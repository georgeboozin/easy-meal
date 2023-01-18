import styles from "./Footer.module.css";
import { IstagramIcon } from "./IstagramIcon";
import { FacebookIcon } from "./FacebookIcon";

interface Props {}

export const Footer = ({}: Props) => {
  return (
    <div className={`${styles.root}`}>
      <div className="flex flex-row justify-between py-8 px-4 lg:px-8 mx-auto lg:max-w-7xl">
        <div>
          <div className="flex flex-row">
            <a
              href="https://www.instagram.com/__easymeal__/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.bolt} lg:mr-12 md:mr-8 mr-2`}
            >
              <IstagramIcon width={42} height={42} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100086515950120"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.bolt} mr-2`}
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
            className="w-full flex items-center justify-center px-4 py-2 text-wewak font-medium rounded-md text-gray-900 border border-black  bg-white hover:shadow-lg"
          >
            Leave Feedback
          </a>
        </div>
      </div>
    </div>
  );
};
