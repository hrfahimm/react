import React from "react";
import "./Cart.css";

const Cart = (props) => {
	const {cart} = props;
	let totalQuantity = 0;

	let total = 0;
	for (const product of cart) {
		if (!product.quantity) {
			product.quantity = 1;
		}

		total = total + product.price * product.quantity;
		totalQuantity = totalQuantity + product.quantity;
	}

	return (
		<div>
			<h3>Ouder Summary</h3>
			<h5>Item Order:{totalQuantity} </h5>
			<br />
			<p>Total : {total}</p>
		</div>
	);
};

export default Cart;
