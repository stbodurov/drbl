// import { useContext } from "react";
// import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { TickerType } from "../../types";
import styles from "./CurrencyCard.module.scss";

type CurrencyCardProps = {
  ticker: TickerType;
  equity: number;
  marketCap: string;
  icon: JSX.Element;
};

const CurrencyCard = ({
  ticker,
  equity,
  marketCap,
  icon,
}: CurrencyCardProps) => {
  return (
    <div className={`${styles.card} ${styles[ticker]}`}>
      <span className={styles.logo}>{icon}</span>
      <div className={styles.priceData}>
        <span className={styles.equity}>${equity.toFixed(2)}</span>
        <span className={styles.marketCap}>Market Cap ${marketCap}</span>
      </div>
    </div>
  );
};

export default CurrencyCard;
