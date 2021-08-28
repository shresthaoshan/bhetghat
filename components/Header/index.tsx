import * as React from "react";
import Navbar from "../Navbar";

import css from "./header.module.css";

const logo_link =
	"data:image/png;base64,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";

function Header() {
	return (
		<div className={css.header}>
			<div className="img">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					className={css.brand_logo}
					src={logo_link}
					alt="tailwind logo"
				/>
			</div>

			<Navbar />
		</div>
	);
}

export default Header;
