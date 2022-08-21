import SidebarLink from "../SidebarLink/SidebarLink";
import styles from "./Sidebar.module.scss";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoSwapHorizontalOutline, IoSettingsOutline } from "react-icons/io5";
import { RiExchangeDollarLine } from "react-icons/ri";
import { TbExchange } from "react-icons/tb";

const Sidebar: React.FC = () => {
	const iconProps = { size: "20px", style: { marginRight: "1rem" } };

	return (
		<nav className={styles.sidebar}>
			<h1 className={styles.title}>Coinbets</h1>
			<ul className={styles.options}>
				<SidebarLink text="Dashboard" route="/" hasUpdate>
					<MdOutlineSpaceDashboard {...iconProps} />
				</SidebarLink>
				<SidebarLink text="Buy / Sell" route="/buy-sell">
					<IoSwapHorizontalOutline {...iconProps} />
				</SidebarLink>
				<SidebarLink text="Transactions" route="/transactions">
					<RiExchangeDollarLine {...iconProps} />
				</SidebarLink>
				<SidebarLink text="Exchange" route="/exchange">
					<TbExchange {...iconProps} />
				</SidebarLink>
				<SidebarLink text="Tools" route="/tools">
					<IoSettingsOutline {...iconProps} />
				</SidebarLink>
			</ul>
		</nav>
	)
};

export default Sidebar;