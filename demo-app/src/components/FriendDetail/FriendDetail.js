import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const FriendDetail = () => {
	const {friendId} = useParams();
	const [friend, setFriend] = useState({});

	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setFriend(data));
	}, []);
	return (
		<div>
			<h1>singlr friends :{friendId}</h1>
			<h2>{friend.name}</h2>
			<h3>{friend.phone}</h3>
			<h1>{friend.company?.name}</h1>
		</div>
	);
};

export default FriendDetail;
