import styles from "./Card.module.scss";

type CardProps = {
	ticker: ("BTC" | "ETH" | "LUNA" | "DOT"),
	equity: number,
	marketCap: string,
};

const Card = ({ ticker, equity, marketCap }: CardProps) => {
	return (
		<div className={styles.card} data-ticker={ticker}>
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

export default Card;