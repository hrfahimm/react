import logo from "./logo.svg";
import "./App.css";
import {useEffect, useState} from "react";

function App() {
	return (
		<div className="App">
			{/* <Counter></Counter> */}
			<ExternalUser></ExternalUser>
		</div>
	);
}
function ExternalUser() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);
	return (
		<div>
			<h3>ExternalUser</h3>
			{users.map((user) => (
				<User name={user.name} email={user.email} id={user.id}>
					{" "}
				</User>
			))}
		</div>
	);
}
function User(props) {
	return (
		<div className="product">
			<h2>id:{props.id}</h2>
			<h2>Name:{props.name}</h2>
			<h2>email:{props.email}</h2>
		</div>
	);
}

function Counter() {
	const [count, setCount] = useState(0);
	const handleIncrise = () => setCount(count + 1);
	const handleDecress = () => setCount(count - 1);
	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={handleIncrise}>Incress</button>
			<button onClick={handleDecress}>Decriss</button>
		</div>
	);
}

function Product(props) {
	const productStyle = {
		border: "4px solid black",
	};
	return (
		<div className="product" style={productStyle}>
			<h2>Name:{props.name}</h2>
			<h4>Price:{props.price}</h4>
		</div>
	);
}

/*
const products = [
		{name: "mobile", price: "8900"},
		{name: "camera", price: "999"},
		{name: "watch", price: "826"},
		{name: "Tshart", price: "566"},
		{name: "show", price: "778"},
	];
*/

/*

{products.map((product) => (
				<Product name={product.name} price={product.price}></Product>
			))}
			 <Product name="mobile" price="1700"></Product>
			<Product name="laptop" price="999"></Product>
			<Product name="camera" price="2278"></Product>
			<Product name="cmputer" price="8347"></Product>
*/

export default App;
