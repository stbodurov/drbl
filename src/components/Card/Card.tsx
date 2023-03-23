import { ReactNode } from "react";
import styles from "./Card.module.scss";

type CardProps = {
  title: string;
  headerElements?: JSX.Element[];
  children?: ReactNode;
};

const Card = ({ title, headerElements, children }: CardProps) => {
  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.headerElements}>
          {headerElements?.map((el) => el)}
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Card;
