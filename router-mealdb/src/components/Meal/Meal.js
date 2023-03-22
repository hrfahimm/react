import React from "react";
import {Link, useNavigate} from "react-router-dom";
import "./Meal.css";
const Meal = (props) => {
	const {strMeal, strInstructions, strMealThumb, idMeal} = props.meal;

	return (
		<div className="meal">
			<img src={strMealThumb} alt="" />
			<h4>
				name:{strMeal} {idMeal}
			</h4>
			<p>{strInstructions.slice(0, 10)}</p>
			<br />
			<Link to={`/meal/${idMeal}`}>
				<button>visite</button>
			</Link>
			<br />
		</div>
	);
};

export default Meal;
