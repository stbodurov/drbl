import { BsCurrencyBitcoin, BsDot } from "react-icons/bs";
import { TbCurrencyEthereum, TbCurrencyLitecoin } from "react-icons/tb";
import { RiFileUnknowLine } from "react-icons/ri";
import { Ticker } from "../../../types";
import styles from "./CurrencyBadge.module.scss";

interface Props {
  ticker: Ticker;
  showColor?: boolean;
}

export default function CurrencyBadge({ ticker, showColor }: Props) {
  return (
    <span
      className={styles.logo}
      style={
        showColor ? { backgroundColor: `var(--${ticker}-color-secondary)` } : {}
      }
    >
      {getLogo(ticker, showColor)}
    </span>
  );
}

function getLogo(ticker: Ticker, showColor?: boolean): JSX.Element {
  const color = showColor ? `var(--${ticker}-color)` : undefined;
  switch (ticker) {
    case "BTC":
      return <BsCurrencyBitcoin size={24} color={color} />;
    case "ETH":
      return <TbCurrencyEthereum size={24} />;
    case "LUNA":
      return (
        <TbCurrencyLitecoin size={24} strokeWidth="0.2rem" color={color} />
      );
    case "DOT":
      return <BsDot size={24} strokeWidth="0.2rem" />;
    default:
      return <RiFileUnknowLine size={24} />;
  }
}
