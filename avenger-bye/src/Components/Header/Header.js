import React from "react";
import "./Header.css";
import logo from "../../images/logo/logo.jpg";
const header = () => {
	return (
		<div className="header">
			<nav className="logo">
				<img src={logo} alt="" />
			</nav>
		</div>
	);
};

export default header;
