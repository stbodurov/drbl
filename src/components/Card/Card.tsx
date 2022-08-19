import styles from "./Card.module.scss";
import { Link, useLocation, useMatch } from "react-router-dom";

type CardProps = {
	currency: string,
	equity: string,
	marketCap: string
	gradientColorBegin: string,
	gradientColorEnd: string
};

const Card = ({ currency, equity, marketCap, gradientColorBegin, gradientColorEnd }: CardProps) => {
	return (
		<div className={styles.card}
			data-gradient-color-begin={gradientColorBegin}
			data-gradient-color-end={gradientColorEnd}>
			<span>${equity}</span>
			<span>Market Cap ${marketCap}</span>
		</div>
	)
};

export default Card