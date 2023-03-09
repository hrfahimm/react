import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
const Header = () => {
	return (
		<div>
			<nav className="header">
				<div className="logo">
					<img className="img-logo" src={logo} />
				</div>
				<div className="menu">
					<a href="/shop">Shop</a>
					<a href="/order">Order</a>
					<a href="/inventory">Manag Inventory</a>
				</div>
			</nav>
			<div className="search-bar">
				<input className="input-fild" type="text" placeholder="Type here..." />
				<button className="search-btn">Search</button>
			</div>
		</div>
	);
};

export default Header;
