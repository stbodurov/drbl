import styles from "./ToolbarLink.module.scss";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { forwardRef } from "react";

const SidebarButton: React.FC = forwardRef<HTMLButtonElement>((_, ref) => (
	<button ref={ref} className={styles.toolbarBtn}>
		<span className={styles.logo}>

		</span>

	</button>
));

export default SidebarButton;