import styles from "./Copy.module.css";
import { CopyIcon } from "./CopyIcon";
import { copyTextToClipboard } from "./Copy.utils";
import { Notification } from "components/Notification";
import { useState } from "react";
import { useRouter } from "next/router";
import i18n from "./assets/i18n.json";

interface Props {
  text: string;
}

export const Copy = ({ text }: Props) => {
  const { locale } = useRouter();

  const messages = i18n[locale as "en" | "ge" | "ru"];
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleClick = async () => {
    try {
      await copyTextToClipboard(text);
      setOpen(true);
    } catch (e) {
      setOpen(false);
    }
  };

  return (
    <>
      <span className={styles.root} onClick={handleClick}>
        <CopyIcon />
      </span>
      <Notification
        message={messages.clipboardMessage}
        isOpen={isOpen}
        handleClose={() => setOpen(false)}
      />
    </>
  );
};
