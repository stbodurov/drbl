import styles from "../Sidebar/Sidebar.module.scss";
import { Link, useLocation, useMatch } from "react-router-dom";

type SidebarLinkProps = {
	text: string,
	iconName: string,
	route: string
};

const SidebarLink = ({text, iconName, route}: SidebarLinkProps) => {
	const {pathname} = useLocation();
	const current = !!useMatch(route);

	return (
		<Link to={route} className={styles["sidebarLink" + (current ? " current" : "")]}>
			{text}
		</Link>
	)
};

export default SidebarLink