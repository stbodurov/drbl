import { BsCurrencyBitcoin, BsDot } from "react-icons/bs";
import { TbCurrencyEthereum, TbCurrencyLitecoin } from "react-icons/tb";
import { RiFileUnknowLine } from "react-icons/ri";
import { TickerType } from "../../types";

export default (ticker: TickerType): JSX.Element => {
  switch (ticker) {
    case "BTC":
      return <BsCurrencyBitcoin size={24} />;
    case "ETH":
      return <TbCurrencyEthereum size={24} />;
    case "LUNA":
      return <TbCurrencyLitecoin size={24} strokeWidth="0.2rem" />;
    case "DOT":
      return <BsDot size={24} strokeWidth="0.2rem" />;
    default:
      return <RiFileUnknowLine size={24} />;
  }
};
