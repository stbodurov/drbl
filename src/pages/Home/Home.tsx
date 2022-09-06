import { IoLogoBitcoin } from "react-icons/io5";
import Card from "../../components/Card/Card";
import Chart from "../../components/Chart/Chart";
import CurrencyCard from "../../components/CurrencyCard/CurrencyCard";
import getCurrencyCardIcon from "../../components/CurrencyCard/getCurrencyCardIcon";
import ImpressionsBtn from "../../components/ImpressionsBtn";
import { TickerType } from "../../types";
import styles from "./Home.module.scss";

const currencyData: CurrencyData[] = require("../../test/mocks/currencies.json");

interface CurrencyData {
	ticker: TickerType;
	equity: number;
	marketCap: string;
	icon: JSX.Element
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
						marketCap={marketCap}
						icon={getCurrencyCardIcon(ticker)} />
				)}
			</section>
			<section className={styles.infoCards}>
				<Card title="Impressions" headerElements={[
					<ImpressionsBtn key="weeklyImpressions" className="current">Weekly</ImpressionsBtn>,
					<ImpressionsBtn key="monthlyImpressions">Monthly</ImpressionsBtn>
				]}>
					<Chart />
				</Card>
				<Card title="Activity" />
				<Card title="Bitcoin" />
				<Card title="Your Portfolio" />
			</section>
		</main>
	</div>
);