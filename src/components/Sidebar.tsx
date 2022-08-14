import React from "react";
import "../styles/Sidebar.scss";

import { RiHomeLine } from "react-icons/ri";

const Sidebar: React.FC = () => {
	return (
		<nav className="sidebar">
			<ul className="options">
				<li>
					<SidebarButton current>
						<RiHomeLine size="1rem" color="white" />
					</SidebarButton>
				</li>
				<li>
					<SidebarButton>
						<RiHomeLine size="1rem" color="white" />
					</SidebarButton>
				</li>
				<li>
					<SidebarButton>
						<RiHomeLine size="1rem" color="white" />
					</SidebarButton>
				</li>
				<li>
					<SidebarButton>
						<RiHomeLine size="1rem" color="white" />
					</SidebarButton>
				</li>
				<li>
					<SidebarButton>
						<RiHomeLine size="1rem" color="white" />
					</SidebarButton>
				</li>
			</ul>

			<ul className="options">
				<li>
					<SidebarButton compact>
						<RiHomeLine size="1rem" color="white" />
					</SidebarButton>
				</li>
				<li>
					<SidebarButton compact>
						<RiHomeLine size="1rem" color="white" />
					</SidebarButton>
				</li>
			</ul>
		</nav>
	)
};

const SidebarButton = (props) => (
	<button className={"sidebarButton" + (props.current ? " current" : "") + (props.compact ? " compact" : "")}>
		{props.children}
	</button>
);

export default Sidebar;