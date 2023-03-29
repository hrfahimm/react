import React from "react";
import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";

const Father = (props) => {
	const {num} = props;
	return (
		<div style={{border: "5px solid green"}}>
			<h1>Father</h1>
			<h2>{num}</h2>

			<div style={{display: "flex", border: "2px solid blue"}}>
				<Brother num={num}></Brother>
				<Sister num={num}></Sister>
			</div>
		</div>
	);
};

export default Father;
