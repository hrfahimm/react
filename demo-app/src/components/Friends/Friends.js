import React, {useEffect, useState} from "react";
import Friend from "../Friend/Friend";
import "./Friends.css";
const Friends = () => {
	const [friends, setfriends] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setfriends(data));
	}, []);
	return (
		<div>
			<h2>i Have Friends {friends.length}</h2>
			<div className="friendcontainer">
				{friends.map((friend) => (
					<Friend key={friend.id} friend={friend}></Friend>
				))}
			</div>
		</div>
	);
};

export default Friends;
