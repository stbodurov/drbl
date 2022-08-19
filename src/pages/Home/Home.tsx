import Card from "../../components/Card/Card";
import styles from "./Home.module.scss";

export default () => (
	<div className={styles.main}>
		<header className={styles.header}>
			<h2 className={styles.overviewTitle}>Overview Dashboard</h2>
			<h3 className={styles.viewTitle}>Trading View</h3>
		</header>
		<main className={styles.center}>
			<Card
			currency="bitcoin"
			equity="8520.20"
			marketCap="151.45B"
			gradientColorBegin="green"
			gradientColorEnd="blue" />
		</main>
	</div>
);