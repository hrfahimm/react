import {useEffect, useState} from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("./product.JSON")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<div>
			<div className="shop-container">
				<div className="person-container">
					<h3>Our Products </h3>

					{products.map((product) => (
						<Product product={product}></Product>
					))}
				</div>
				<div className="cart-container">Order</div>
			</div>
		</div>
	);
};

export default Shop;
