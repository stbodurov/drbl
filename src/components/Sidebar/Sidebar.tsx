import React, { PropsWithChildren } from "react";
import SidebarLink from "../SidebarLink/SidebarLink";
import styles from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
	return (
		<nav className={styles.sidebar}>
			<h1 className={styles.title}>Coinbets</h1>
			<ul className={styles.options}>
				<SidebarLink text="Dashboard" route="/" iconName="app" />
				<SidebarLink text="Buy / Sell" route="/buy-sell" iconName="wallet" />
				<SidebarLink text="Transactions" route="/transactions" iconName="dollar" />
				<SidebarLink text="Exchange" route="/exchange" iconName="exchange" />
				<SidebarLink text="Tools" route="/tools" iconName="tools" />
			</ul>
		</nav>
	)
};

export default Sidebar;