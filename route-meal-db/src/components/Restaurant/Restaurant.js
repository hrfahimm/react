import React, {useEffect, useState} from "react";
import Meal from "../Meal/Meal";
import "./Restaurant.css";

const Restaurant = () => {
	const [searchText, setSearchText] = useState("");
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => setMeals(data.meals));
	}, [searchText]);

	const handelSearchFild = (event) => {
		const searchText = event.target.value;
		setSearchText(searchText);
	};
	return (
		<div className="search-container">
			<div className="search-fild">
				<input onChange={handelSearchFild} type="text" placeholder="search here......." />
			</div>
			<div className="meals-container">
				{meals.map((meal) => (
					<Meal key={meal.idMeal} meal={meal}></Meal>
				))}
			</div>
		</div>
	);
};

export default Restaurant;
