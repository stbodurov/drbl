import Card from "../../components/Card/Card";
import styles from "./Home.module.scss";

const currencyData: CurrencyData[] = require("../../test/mock/currencies.json");

interface CurrencyData {
	ticker: ("BTC" | "ETH" | "LUNA" | "DOT");
	equity: number;
	marketCap: string;
}

export default () => (
	<div className={styles.main}>
		<header className={styles.header}>
			<h2 className={styles.overviewTitle}>Overview Dashboard</h2>
			<h3 className={styles.viewTitle}>Trading View</h3>
		</header>
		<main className={styles.center}>
			{/* <div className={styles.cardHolderCont}> */}
				<div className={styles.cardHolder}>
					{currencyData.map(({ ticker, equity, marketCap }: CurrencyData) =>
						<Card
							key={ticker}
							ticker={ticker}
							equity={equity}
							marketCap={marketCap} />
					)}
				</div>
			{/* </div> */}
		</main>
	</div>
);