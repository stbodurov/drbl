import React from "react";
import "./Sidebar.scss";

import { RiHomeLine } from "react-icons/ri";

const Sidebar: React.FC = () => {
	return (
		<nav className="sidebar">
			<ul className="options">
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

			<ul className="options">
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
	<a className={"sidebarLink" + (props.current ? " current" : "") + (props.compact ? " compact" : "")}>
		{props.children}
	</a>
);

export default Sidebar;