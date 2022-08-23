import styles from "./CurrencyCard.module.scss";

type CurrencyCardProps = {
	ticker: ("BTC" | "ETH" | "LUNA" | "DOT"),
	equity: number,
	marketCap: string,
};

const CurrencyCard = ({ ticker, equity, marketCap }: CurrencyCardProps) => {
	return (
		<div className={`${styles.card} ${styles[ticker]}`}>
			<span className={styles.logo}>

			</span>
			<div className={styles.priceData}>
				<span className={styles.equity}>
					${equity.toFixed(2)}
				</span>
				<span className={styles.marketCap}>
					Market Cap ${marketCap}
				</span>
			</div>
		</div>
	)
};

export default CurrencyCard;