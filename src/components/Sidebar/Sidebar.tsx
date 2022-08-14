import React from "react";
import styles from "./Sidebar.module.scss";

import { RiHomeLine } from "react-icons/ri";

const Sidebar: React.FC = () => {
	return (
		<nav className={styles.sidebar}>
			<h1 className={styles.title}>Coinbets</h1>
			<ul className={styles.options}>
				<li>
					<SidebarLink current>
						<RiHomeLine size="16px" color="white" />
					</SidebarLink>
				</li>
				<li>
					<SidebarLink>
						<RiHomeLine size="16px" color="white" />
					</SidebarLink>
				</li>
				<li>
					<SidebarLink>
						<RiHomeLine size="16px" color="white" />
					</SidebarLink>
				</li>
				<li>
					<SidebarLink>
						<RiHomeLine size="16px" color="white" />
					</SidebarLink>
				</li>
				<li>
					<SidebarLink>
						<RiHomeLine size="16px" color="white" />
					</SidebarLink>
				</li>
			</ul>

			<ul className={styles.options}>
				<li>
					<SidebarLink compact>
						<RiHomeLine size="16px" color="white" />
					</SidebarLink>
				</li>
				<li>
					<SidebarLink compact>
						<RiHomeLine size="16px" color="white" />
					</SidebarLink>
				</li>
			</ul>
		</nav>
	)
};

const SidebarLink = (props) => (
	<a className={styles["sidebarLink" + (props.current ? " current" : "") + (props.compact ? " compact" : "")]}>
		{props.children}
	</a>
);

export default Sidebar;