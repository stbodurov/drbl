import { ReactNode } from "react";
import styles from "./Card.module.scss";
import classNames from "classnames";

type CardProps = {
  title: string;
  headerElements?: JSX.Element[];
  className?: string;
  children?: ReactNode;
};

const Card = ({ title, headerElements, className, children }: CardProps) => {
  return (
    <div className={classNames(styles.card, className)}>
      <header className={styles.header}>
        <h2 className={classNames(styles.title, "cardTitle")}>{title}</h2>
        <div className={styles.headerElements}>
          {headerElements?.map((el) => el)}
        </div>
      </header>
      <section>{children}</section>
    </div>
  );
};

export default Card;
