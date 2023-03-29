import React from "react";
import Player from "../Player/Player";
import Teacher from "../Teacher/Teacher";
import "./User.css";
const User = (props) => {
	const {familiar} = props;

	//1. element variable
	let greeting;
	if (familiar) {
		greeting = <h4>hellow friend</h4>;
	} else {
		greeting = <h4>Go to hell</h4>;
	}
	//2. ternary operator
	//condition ? (display true):(display false)
	return (
		<div>
			<div className="div">
				<h2>Greetings</h2>
				{greeting}
			</div>
			<div className="div">
				<h2>food</h2>
				{familiar ? <p>Kacci bereani</p> : <p>No bereani </p>}
			</div>
			<div className="div">
				<h2>a lot of things</h2>
				{familiar ? (
					<div>
						<h3>My title</h3>
						<p>This is my title</p>
					</div>
				) : (
					<div>
						<h3>Not my Title</h3>
						<p>This is not my title </p>
					</div>
				)}
			</div>
			<div className="div">
				<h2>connection</h2>
				{familiar && <Player />}
			</div>

			<div className="div">
				<h2>connection</h2>
				{familiar || (
					<div>
						<h1>false</h1>
						<h2> Khamu na Dab ar pani</h2>
					</div>
				)}
			</div>
			<div className="div">
				<h2>connection</h2>
				{familiar ? <Teacher /> : <Player />}
			</div>
		</div>
	);
};

export default User;
