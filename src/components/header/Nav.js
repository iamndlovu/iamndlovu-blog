import React from "react";

import navStyles from "./Nav.module.scss";

const Nav = () => {
	return (
		<menu className={navStyles.Nav}>
			<h1>
				<a href="/">Pardon Ndlovu's Blog</a>
			</h1>
			<nav>
				<ul>
					<li>
						<a
							href="https://iamndlovu.netlify.app/portfolio/"
							rel="noreferrer"
							target="_blank"
						>
							Portfolio
						</a>
					</li>
					<li>
						<a
							href="https://iamndlovu.netlify.app/contact/"
							rel="noreferrer"
							target="_blank"
						>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</menu>
	);
};

export default Nav;
