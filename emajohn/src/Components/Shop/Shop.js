import {useEffect, useState} from "react";
import {addToDb, getStoredCart} from "../../utilities/fackdb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	useEffect(() => {
		fetch("./product.JSON")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	useEffect(() => {
		if (products.length) {
			const savedCart = getStoredCart();
			const storedCart = [];
			for (const key in savedCart) {
				 
				const addedProduct = products.find((product) => product.key === key);
				if (addedProduct) {
					const quantity = savedCart[key];
					addedProduct.quantity = quantity;
					storedCart.push(addedProduct);
				}
			}
			setCart(storedCart);
		}
	}, [products]);

	const handelAddToCart = (product) => {
		// console.log(product);
		const newCart = [...cart, product];
		setCart(newCart);
		addToDb(product.key);
	};

	return (
		<div>
			<div className="input-container">
				<input type="text" placeholder="Search Here..." />
			</div>
			<div className="shop-container">
				<div className="person-container">
					<h3>Our Products </h3>

					{products.map((product) => (
						<Product
							handelAddToCart={handelAddToCart}
							key={product.key}
							product={product}></Product>
					))}
				</div>
				<div className="cart-container">
					<Cart cart={cart}></Cart>
				</div>
			</div>
		</div>
	);
};

export default Shop;