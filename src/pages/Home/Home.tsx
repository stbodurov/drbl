import Card from "../../components/Card/Card";
import CurrencyCard from "../../components/CurrencyCard/CurrencyCard";
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
			<div className={styles.titles}>
				<h2 className={styles.overviewTitle}>Overview Dashboard</h2>
				<h3 className={styles.viewTitle}>Trading View</h3>
			</div>
			<nav className="toolbar">
				
			</nav>
		</header>
		<main className={styles.center}>
			<section className={styles.currencyCards}>
				{currencyData.map(({ ticker, equity, marketCap }: CurrencyData) =>
					<CurrencyCard
						key={ticker}
						ticker={ticker}
						equity={equity}
						marketCap={marketCap} />
				)}
			</section>
			<section className={styles.infoCards}>
				<Card title="Impressions" />
				<Card title="Activity" />
				<Card title="Bitcoin" />
				<Card title="Your Portfolio" />
			</section>
		</main>
	</div>
);