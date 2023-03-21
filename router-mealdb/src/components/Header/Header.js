import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";
const Header = () => {
	return (
		<nav className="header">
			<Link to="/home" className="link">
				Home
			</Link>
			<Link to="/meals" className="link">
				Meals
			</Link>
		</nav>
	);
};

export default Header;
