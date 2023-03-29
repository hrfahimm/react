import React from "react";
import "./Header.css";
import logo from "../../images/1240255.png";
import {NavLink} from "react-router-dom";
const Header = () => {
	return (
		<div className="header">
			<div className="logo">
				<img src={logo} alt="" />
			</div>

			<div className="menu">
				<NavLink to="/shop">Shop</NavLink>
				<NavLink to="/review">Order Review</NavLink>
				<NavLink to="/inventory"> Inventory</NavLink>
			</div>
		</div>
	);
};

export default Header;
