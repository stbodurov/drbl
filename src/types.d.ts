interface CurrencyData {
  ticker: Ticker;
  equity: number;
  marketCap: string;
}

interface Transaction {
  id?: number;
  ticker: Ticker;
  amount: number;
  type: "send" | "receive";
  status: string;
}

export type Ticker = "BTC" | "ETH" | "LUNA" | "DOT";
