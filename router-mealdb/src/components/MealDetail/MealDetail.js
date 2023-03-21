import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

const MealDetail = () => {
	const {idMeal} = useParams();
	const [meal, srtMeal] = useState({});
	useEffect(() => {
		const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => srtMeal(data));
	}, []);
	return (
		<div>
			<h1>{meal.idMeal}</h1>
			<img src={meal.strMealThumb} alt="" />
			<h1>{meal.strMeal}</h1>
			<h2>{strInstructions}</h2>
		</div>
	);
};

export default MealDetail;
