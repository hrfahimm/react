import React from "react";
import "./Product.css";
const Product = (props) => {
	const {name, img, price, stock, seller} = props.product;
	return (
		<div className="product">
			<div className="image">
				<img src={img} alt="" />
			</div>
			<div>
				<h4>Name : {name}</h4>
				<h3>Price : {price}</h3>
				<h5>Seller : {seller}</h5>
				<h4>Stock : {stock}</h4>
				<button onClick={()=>props.handelAddToCart(props.product)} className="btn-regilar">
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default Product;
