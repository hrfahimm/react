import React, {useEffect, useState} from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	return (
		<div className="shop-container">
			<div className="cart-container">
				<h2>ORDER</h2>
			</div>
			<div className="product-container">
				<h2>Our Products</h2>
				{products.map((product) => (
					<Product product={product}></Product>
				))}
			</div>
		</div>
	);
};

export default Shop;
