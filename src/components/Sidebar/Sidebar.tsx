import SidebarLink from "./SidebarLink/SidebarLink";
import styles from "./Sidebar.module.scss";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoSwapHorizontalOutline, IoSettingsOutline } from "react-icons/io5";
import { RiExchangeDollarLine } from "react-icons/ri";
import { TbExchange } from "react-icons/tb";
import Icon from "../../assets/Icon";

const Sidebar = () => {
  const iconProps = { size: 20, style: { marginRight: "1rem" } };

  return (
    <nav className={styles.sidebar}>
      <div className={styles.header}>
        <Icon height={50} width={50} />
        <h1 className={styles.title}>Coinbets</h1>
      </div>
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
  );
};

export default Sidebar;
