import React from "react";
import "./Header.css";
import logo from "../../images/1240255.png";
const Header = () => {
	return (
		<div className="header">
			<div className="logo">
				<img src={logo} alt="" />
			</div>

			<div className="menu">
				<a href="/shop">Shop</a>
				<a href="/review">Order Review</a>
				<a href="/inventory"> Inventory</a>
			</div>
		</div>
	);
};

export default Header;
