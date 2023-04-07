interface CurrencyData {
  ticker: Ticker;
  equity: number;
  marketCap: string;
}

interface Transaction {
  ticker: Ticker;
  amount: number;
  type: "send" | "receive";
  status: string;
}

export type Ticker = "BTC" | "ETH" | "LUNA" | "DOT";
