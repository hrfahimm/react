import React, {useEffect, useState} from "react";
import Person from "../Person/Person";

import "./Shop.css";
const Shop = () => {
	const [persons, setPersons] = useState([]);
	useEffect(() => {
		fetch("./persons.JSON")
			.then((res) => res.json())
			.then((data) => setPersons(data));
	}, []);

	return (
		<div className="shop-container">
			<div className="person-container">
				<h3>Product : {persons.length}</h3>
				{persons.map((person) => (
					<Person person={person}></Person>
				))}
			</div>
			<div className="cart-container"></div>
		</div>
	);
};

export default Shop;
