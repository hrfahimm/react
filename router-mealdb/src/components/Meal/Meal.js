import React from "react";
import {Link, useNavigate} from "react-router-dom";
import "./Meal.css";
const Meal = (props) => {
	const {strMeal, strInstructions, strMealThumb, idMeal} = props.meal;
	// const history = useNavigate();
	const url = `/meal/${idMeal}`;
	const handelMealItem = () => {
		history.push("/home");
	};
	return (
		<div className="meal">
			<img src={strMealThumb} alt="" />
			<h4>{strMeal}</h4>
			<p>{strInstructions.slice(0, 100)}</p>
			<br />
			<Link to={`/meal${idMeal}`}>
				<button>visite</button>
			</Link>
			<br />
			<button onClick={handelMealItem}>Show Details</button>
		</div>
	);
};

export default Meal;
