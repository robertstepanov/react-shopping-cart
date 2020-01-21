import React from 'react';

const Item = props => {
	// const { products, addItem } = useContext(ProductContext);
	return (
		<div className="shopping-cart_item">
			<img src={props.	image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
