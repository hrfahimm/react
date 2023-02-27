import React from "react";
 

const Book = (props) => {
	return (
		<div>
			<h2>{props.name}</h2>
            <h2>{props.authore}</h2>
             
		</div>
	);
};

export default Book;
