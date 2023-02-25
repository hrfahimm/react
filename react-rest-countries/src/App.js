import logo from "./logo.svg";
import "./App.css";
import {useEffect, useState} from "react";

function App() {
	return (
		<div className="App">
			<Countries></Countries>
		</div>
	);
}

function Countries() {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((res) => res.json())
			.then((data) => setCountries(data));
	}, []);
	return (
		<div>
			<h2>Travell the World</h2>
			<h4>Countries Aveleable:{countries.length}</h4>
		</div>
	);
}

export default App;
