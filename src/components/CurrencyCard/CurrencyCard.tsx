// import { useContext } from "react";
// import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { Ticker } from "../../types";
import CurrencyBadge from "../common/CurrencyBadge/CurrencyBadge";
import styles from "./CurrencyCard.module.scss";

type CurrencyCardProps = {
  ticker: Ticker;
  equity: number;
  marketCap: string;
};

const CurrencyCard = ({ ticker, equity, marketCap }: CurrencyCardProps) => {
  return (
    <div className={`${styles.card} ${styles[ticker]}`}>
      <CurrencyBadge ticker={ticker} />
      <div className={styles.priceData}>
        <span className={styles.equity}>${equity.toFixed(2)}</span>
        <span className={styles.marketCap}>Market Cap ${marketCap}</span>
      </div>
    </div>
  );
};

export default CurrencyCard;
