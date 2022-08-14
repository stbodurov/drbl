import styles from "./Home.module.scss";

export default () => (
	<main>
		<h1 className={styles.homeTitle}>Home</h1>
		<h2 className={styles.userGreeting}>Bonjour Mike</h2>
	</main>
);