import * as React from "react";
import Link from "next/link";

import css from "./navbar.module.css";

const _navItems = [
	{
		label: "About",
		path: "/about",
	},
	{
		label: "Products",
		path: "/products",
	},
	{
		label: "Pricing",
		path: "/pricing",
	},
	{
		label: "Contact",
		path: "/contact",
	},
];

function Navbar() {
	return (
		<ul className={css.navlist}>
			{_navItems.map((item) => (
				<li key={item.path} className={css.navlist_item}>
					<Link passHref href={item.path}>
						<a className={css.nav_link}>{item.label}</a>
					</Link>
				</li>
			))}
		</ul>
	);
}

export default Navbar;
