import React from "react";
import "./Person.css";
const Person = (props) => {
	const {name, img, key, age, price} = props.person;
	return (
		<div className="cards">
			<div className="card">
				<img src={img} alt="" />
				<h4> Name : {name}</h4>
				<p className="price">Sellery : {price}</p>
				<p>
					<button>Add to Cart</button>
				</p>
			</div>
		</div>
	);
};

export default Person;
