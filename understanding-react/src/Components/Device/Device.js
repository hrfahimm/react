import React from "react";
import Config from "../Config/Config";

const Device = (props) => {
	return (
		<div style={{border: "2px solid black", margin: "10px"}}>
			<h1>My device : {props.name}</h1>
			<h4>courrent step {props.steps}</h4>
			<Config price={props.price}></Config>
		</div>
	);
};

export default Device;
