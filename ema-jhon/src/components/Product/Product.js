import React from "react";
import "./Product.css";
const Product = (props) => {
	const {name, img, price, stock, seller} = props.product;
	return (
		<div className="product-container">
			<div className="product">
				<img className="image" src={img} alt="" />
				<h3>Name : {name}</h3>
				<h3>Price : {price}</h3>
				<h5>Seller : {seller}</h5>
				<h4>Stock : {stock}</h4>
			</div>
		</div>
	);
};



export default Product;
