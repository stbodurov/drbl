import styles from "./Card.module.scss";

type CardProps = {
	title: string,
};

const Card = ({ title }: CardProps) => {
	return (
		<div className={styles.card}>
			<header className={styles.header}>
				<h2 className={styles.title}>{title}</h2>
			</header>
		</div>
	)
};

export default Card;