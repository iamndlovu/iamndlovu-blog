import React from "react";

import headerStyles from "./Header.module.scss";
import illustration from "./undraw_Add_notes_re_ln36.svg";

const Header = ({ headerData }) => {
	const { paragraph1, subheading, paragraph2 } = headerData;

	return (
		<header className={headerStyles.Header}>
			<div>
				{/* menu */}
				<menu>
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
				{/*intro*/}
				<section>
					<div>
						<p>{paragraph1}</p>
						<h3>
							<span>{subheading.yellow}</span> {subheading.white}
						</h3>
						<p>{paragraph2}</p>
						<div>
							<i
								className={headerStyles.updown + " fa fa-arrow-down fa-2x"}
							></i>
						</div>
					</div>
					<div>
						<img src={illustration} alt="" />
					</div>
				</section>
			</div>
		</header>
	);
};

export default Header;
