//import logo from "./logo.svg";

import "./App.css";
import Countries from "./components/Countries/Countries";

//import {useEffect, useState} from "react";
import Header from "./components/Header/Header";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Countries></Countries>
			<Countries></Countries>
		</div>
	);
}

export default App;

/*
.
.
.
.
.
.

.
.
.
.
.
.
.
.
.
.
\.
.
.
.
.
.
.
.
/

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
			{countries.map((country) => (
				<Country name={country.name} capital={country.capital}></Country>
			))}
		</div>
	);
}

function Country(props) {
	return (
		<div>
			<h2>Name:{props.name}</h2>
			<p>Capital:{props.capital}</p>
		</div>
	);
}
*/
