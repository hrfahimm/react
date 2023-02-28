import React, {useEffect, useState} from "react";
//import {add, multiply} from "../Utilities/Storage";
import Cosmatic from "./Cosmatic";

const Cosmatics = () => {
	const [cosmetics, setCosmetics] = useState([]);
	useEffect(() => {
		fetch("./cosmetics.json")
			.then((res) => res.json())
			.then((data) => setCosmetics(data));
	}, []);
	return (
		<div>
			<h3>Shop my Cosmatics</h3>
			{cosmetics.map((cosmetic) => (
				<Cosmatic key={cosmetic._id} cosmetic={cosmetic}></Cosmatic>
			))}
		</div>
	);
};

export default Cosmatics;
