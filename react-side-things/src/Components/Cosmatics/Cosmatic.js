import React from "react";
import {addToDb} from "../Utilities/fakedb";

const Cosmatic = (props) => {
	const {name, _id, price, email} = props.cosmetic;
	const handelpurches = (id) => {
		console.log(id);
		addToDb(id);
	};
	const withPram = (id) => handelpurches(id);
	return (
		<div>
			<h2>name:{name}</h2>
			<h3>Id; {_id}</h3>
			<p>price: {price}</p>
			<p>email:{email}</p>
			<button onClick={() => handelpurches(_id)}>Purches</button>
		</div>
	);
};

export default Cosmatic;
