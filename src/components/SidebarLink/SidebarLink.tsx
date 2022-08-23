import styles from "./SidebarLink.module.scss";
import { Link, useLocation, useMatch } from "react-router-dom";

type SidebarLinkProps = {
	text: string,
	route: string,
	hasUpdate?: boolean,
	children?: React.ReactNode
};

const SidebarLink = ({ text, route, hasUpdate, children }: SidebarLinkProps) => {
	const current = !!useMatch(route);

	return (
		<Link to={route} className={`${styles.sidebarLink} ${current ? styles.sidebarLinkCurrent : ""}`}>
			<div className={styles.content}>
				{children}
				{text}
			</div>
			{hasUpdate && <span className={styles.badge}></span>}
		</Link>
	)
};

export default SidebarLink