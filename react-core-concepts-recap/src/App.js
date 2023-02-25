import logo from "./logo.svg";
import "./App.css";
import {useEffect, useState} from "react";

function App() {
	return (
		<div className="App">
			<LoadUsers></LoadUsers>
			<MyComponent></MyComponent>
			<MyComponent></MyComponent>
			<MyComponent></MyComponent>
		</div>
	);
}
function LoadUsers() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data)); 
	}, []);
	return (
		<div>
			<h1>User Lodeds:{users.length}</h1>
			{users.map((user) => (
				<User name={user.name} phone={user.phone}></User>
			))}
		</div>
	);
}
function User(props) {
	return (
		<div className="user">
			<h2>Name:{props.name}</h2>
			<p>phone:{props.phone}</p>
		</div>
	);
}
function MyComponent(props) {
	const [points, setPoints] = useState(1);

	const myStyle = {
		backgroundColor: "gray",
		border: "3px solid red",
		margin: "20px",
		padding: "20px",
	};
	const handelAddPoint = () => {
		const newPoints = points * 2;
		setPoints(newPoints);
	};
	return (
		<div style={myStyle}>
			<h2>yo yo mama </h2>
			<h4>Asking Monet price I have POints:{points}</h4>
			<button onClick={handelAddPoint}>Add Points</button>
		</div>
	);
}
export default App;
