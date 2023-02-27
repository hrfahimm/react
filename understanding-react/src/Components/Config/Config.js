import React from "react";

const Config = (props) => {
	return (
		<div style={{border: "2px solid red", margin: "10px"}}>
			<ul>
				<li>Price: {props.price}</li>
			</ul>
		</div>
	);
};

export default Config;
