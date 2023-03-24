import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const MealDetail = () => {
	const {idmeal} = useParams();
	console.log(idmeal);
	const [meal, setMeal] = useState({});
	useEffect(() => {
		const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMeal(data?.meals[0]));
	}, []);

	return (
		<div>
			LOREM ISPUM DOLLAAR
			<h1>LOREM3</h1>
			<img src={meal.strMealThumb} alt="" />
			<h1>{meal.strMeal}</h1>
		</div>
	);
};

export default MealDetail;
