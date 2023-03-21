import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
const Header = () => {
	return (
		<nav className="menu">
			<Link className="link" to="/home">
				Home
			</Link>
			<Link className="link" to="/restaurant">
				Restaurant
			</Link>
			<Link className="link" to="/meal">
				Meal
			</Link>
		</nav>
	);
};

export default Header;
