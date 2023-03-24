import React, {useEffect, useState} from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import "./OrderReview.css";
const OrderReview = () => {
	const [products, setProducts] = useProducts();
	const [cart, setCart] = useCart(products);

	return (
		<div>
			<h1>{products.length}</h1>
			<h3>{cart.length}</h3>
            <h2>order review</h2>
            <Cart></Cart>
		</div>
	);
};

export default OrderReview;
