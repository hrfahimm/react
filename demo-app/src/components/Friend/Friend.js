import React from "react";
import {NavLink} from "react-router-dom";

const Friend = (props) => {
	const {name, id, email} = props.friend;
	const friendsStyle = {
		border: " 3px solid black",
		padding: "10px",
		borderRadious: "10px",
		margin: "20px",
		textAlign: "center",
	};
	return (
		<div style={friendsStyle}>
			<h2>
				i am {name} {id}
			</h2>
			<NavLink to={`/friend/${id}`}>visite me </NavLink>
		</div>
	);
};

export default Friend;
