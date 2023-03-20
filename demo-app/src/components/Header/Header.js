import React from "react";
import "./Header.css";
import {NavLink} from "react-router-dom";
const Header = () => {
	return (
		<nav className="menu">
			<NavLink className="link" to="/home">
				Home
			</NavLink>
			<NavLink className="link" to="/about">
				About
			</NavLink>
			<NavLink className="link" to="/friends">
				Friends
			</NavLink>
			<NavLink className="link" to="/menu">
				menu
			</NavLink>
			<NavLink className="link" to="/about/culture">
				About Culture
			</NavLink>
		</nav>
	);
};

export default Header;
