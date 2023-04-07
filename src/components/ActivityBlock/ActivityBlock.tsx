import styles from "./ActivityBlock.module.scss";
import { Link } from "react-router-dom";
import { Ticker, Transaction } from "../../types";
import CurrencyBadge from "../common/CurrencyBadge/CurrencyBadge";

const ActivityBlock = ({ ticker, amount, type, status }: Transaction) => {
  const isSend = type === "send";
  return (
    <Link to={"/"}>
      <div className={styles.main}>
        <span className={styles.left}>
          <CurrencyBadge ticker={ticker} showColor />
          <span className={styles.textHolder}>
            <p className={styles.text}>{getActivityText(isSend, ticker)}</p>
            <p className={styles.status}>{status}</p>
          </span>
        </span>
        <span className={styles.right}>
          <p className={styles.amount}>
            {isSend && "-"}
            {amount} {ticker}
          </p>
        </span>
      </div>
    </Link>
  );
};

// TODO: i18n
function getActivityText(isSend: boolean, ticker: Ticker) {
  const action = isSend ? "Sent" : "Received";
  let currency;

  switch (ticker) {
    case "BTC":
      currency = "Bitcoin";
      break;
    case "ETH":
      currency = "Ethereum";
      break;
    case "LUNA":
      currency = "Luna";
      break;
    case "DOT":
      currency = "Polkadot";
      break;
    default:
      currency = "unknown currency";
      break;
  }

  return `${action} ${currency}`;
}

export default ActivityBlock;
