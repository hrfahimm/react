import React from "react";
import Aunti from "../Aunti/Aunti";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";

const GrandFather = (props) => {
	const {num} = props;
	return (
		<div style={{border: "5px solid red"}}>
			<h1>GrandFather</h1>
			<h3>{num}</h3>
			<div style={{display: "flex"}}>
				<Father num={num}></Father>
				<Aunti num={num}></Aunti>
				<Uncle num={num}></Uncle>
			</div>
			<div></div>
			<div></div>
		</div>
	);
};

export default GrandFather;
