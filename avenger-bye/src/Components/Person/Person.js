import React from "react";
import "./Person.css";
import img from "../../images/iron-man.jpg";
const Person = () => {
	return (
		<div className="cards">
			<div className="card">
				<img src={img} alt="" />
				<h3>Name : Fahim</h3>
				<h4>Age : 10</h4>
				<p className="price">Sellery : 19,999</p>
				<p>
					<button>Add to Cart</button>
				</p>
			</div>
		</div>
	);
};

export default Person;
