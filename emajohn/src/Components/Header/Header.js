import React from "react";
import "./Header.css";
import logo from "../../images/1240255.png";
const Header = () => {
	return (
		<div>
			<nav>
				<div className="topnav">
					<div className="logo">
						<img src={logo} alt="" />
					</div>

					<div className="">
						<p>Home</p>
						<p>News</p>
						<p>Contact</p>
						 
					</div>
				</div>
			</nav>
			
		</div>
	);
};

export default Header;
