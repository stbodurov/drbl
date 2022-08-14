import React, { PropsWithChildren } from "react";
import SidebarLink from "../SidebarLink/SidebarLink";
import styles from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
	return (
		<nav className={styles.sidebar}>
			<h1 className={styles.title}>Coinbets</h1>
			<ul className={styles.options}>
				<SidebarLink text="Buy / Sell" route="/" iconName="app" />
				<SidebarLink text="Buy / Sell" route="/exchange" iconName="wallet" />
			</ul>
		</nav>
	)
};

export default Sidebar;