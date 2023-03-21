import React, {useEffect, useState} from "react";
import Meal from "../Meal/Meal";
import "./Meals.css";
const Meals = () => {
	const [searchText, setSearchText] = useState("");
	const [meals, setMeals] = useState([]);
	useEffect(() => {
		const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMeals(data.meals));
	}, [searchText]);
	const handelSearchFild = (e) => {
		const searchText = e.target.value;
		setSearchText(searchText);
	};
	return (
		<div className="search-container">
			<div className="search-fild">
				<input onChange={handelSearchFild} type="text" placeholder="Search Here ...." />
			</div>
			<div className="meals-container">
				{meals.map((meal) => (
					<Meal key={meal.idMeal} meal={meal}></Meal>
				))}
			</div>
		</div>
	);
};

export default Meals;
