import React from "react";

const Sister = (props) => {
	const {num} = props;
	return (
		<div style={{border: "2px solid red"}}>
			<h1>Sister</h1>
			<h4>{num}</h4>
		</div>
	);
};

export default Sister;
