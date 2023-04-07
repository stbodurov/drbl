import { BsCurrencyBitcoin, BsDot } from "react-icons/bs";
import { TbCurrencyEthereum, TbCurrencyLitecoin } from "react-icons/tb";
import { RiFileUnknowLine } from "react-icons/ri";
import { Ticker } from "../../../types";
import styles from "./CurrencyBadge.module.scss";

interface Props {
  ticker: Ticker;
  showColor?: boolean;
}
// E6E6FE

export default function CurrencyBadge({ ticker, showColor }: Props) {
  return (
    <span
      className={styles.logo}
      style={showColor ? { backgroundColor: getBackgroundColor(ticker) } : {}}
    >
      {getLogo(ticker, showColor)}
    </span>
  );
}

function getBackgroundColor(ticker: Ticker): string {
  switch (ticker) {
    case "BTC":
      return "#E6E6FE";
    case "ETH":
      return "#E6E6FE";
    case "LUNA":
      return "#DDFBE2";
    case "DOT":
      return "#E6E6FE";
    default:
      return "inherit";
  }
}

function getLogo(ticker: Ticker, showColor?: boolean): JSX.Element {
  switch (ticker) {
    case "BTC":
      return (
        <BsCurrencyBitcoin size={24} color={showColor ? "624EDE" : undefined} />
      );
    case "ETH":
      return <TbCurrencyEthereum size={24} />;
    case "LUNA":
      return (
        <TbCurrencyLitecoin
          size={24}
          strokeWidth="0.2rem"
          color={showColor ? "00D664" : undefined}
        />
      );
    case "DOT":
      return <BsDot size={24} strokeWidth="0.2rem" />;
    default:
      return <RiFileUnknowLine size={24} />;
  }
}
