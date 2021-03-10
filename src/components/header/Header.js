import React from "react";
import Nav from "./Nav";

import headerStyles from "./Header.module.scss";
import illustration from "./undraw_Add_notes_re_ln36.svg";

const Header = ({ headerData }) => {
	const { paragraph1, subheading, paragraph2 } = headerData;

	return (
		<header className={headerStyles.Header}>
			<div>
				{/* menu */}
				<Nav />
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
