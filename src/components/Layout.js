import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

import pageLayout from "./Layout.module.scss";

const layout = ({ children, headerData }) => {
	return (
		<div className={pageLayout.Layout}>
			<div className={pageLayout.container}>
				{headerData && <Header headerData={headerData} />}
				{children}
			</div>
			<Footer />
		</div>
	);
};

export default layout;
