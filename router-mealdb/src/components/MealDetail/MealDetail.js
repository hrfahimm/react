import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const MealDetail = () => {
	const {idMeal} = useParams();
	const [meal, setMeal] = useState({});
	useEffect(() => {
		const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMeal(data));
	}, []);
	return (
		<div>
			<h1>{idMeal}</h1>
			<img src={meal.strMealThumb} alt="" />
			<h1>{meal.strMeal}</h1>
		</div>
	);
};

export default MealDetail;
