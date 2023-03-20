import React from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";

const Friend = (props) => {
	const {name, id, email} = props.friend;

	const history = useNavigate();
	const friendsStyle = {
		border: " 3px solid black",
		padding: "10px",
		borderRadious: "10px",
		margin: "20px",
		textAlign: "center",
	};
	const url = `/friend/${id}`;
	const handelFriendClick = () => {
		history.push("/home");
	};
	return (
		<div style={friendsStyle}>
			<h2>
				i am {name} {id}
			</h2>
			<NavLink to={`/friend/${id}`}>visite me </NavLink>
			<br />
			<Link to={url}>
				<button>Visite Me</button>
			</Link>
			<button onClick={handelFriendClick}>vISITE ME 2222</button>
		</div>
	);
};

export default Friend;
