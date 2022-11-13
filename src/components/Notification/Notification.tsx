import { useEffect } from "react";
import styles from "./Notification.module.css";

interface Props {
  isOpen: boolean;
  message: string;
  handleClose: () => void;
}

export const Notification = ({ isOpen, message, handleClose }: Props) => {
  useEffect(() => {
    if (isOpen)
      [
        setTimeout(() => {
          handleClose();
        }, 5000),
      ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div className={styles.root}>
      {isOpen && <div className="px-4 py-4 bg-beryl">{message}</div>}
    </div>
  );
};
