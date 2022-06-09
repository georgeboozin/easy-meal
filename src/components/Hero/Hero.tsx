import styles from "./Hero.module.css";

interface Props {}

export const Hero = ({}: Props) => {
  return <div className={styles.root}>Hero block</div>;
};
