//purpose user want to add a product
//1 . find the place to store the data
const addToDb = (id) => {
	const stored_cart = getStoredCart();
	if (id in stored_cart) {
		stored_cart[id] = stored_cart[id] + 1;
	} else {
		stored_cart[id] = 1;
	}
	updateDb(stored_cart);
};
const removeFromDb = (id) => {
	const storedcart = getStoredCart();
	delete storedcart[id];
	updateDb(storedcart);
};
const updateDb = (cart) => {
	localStorage.setItem("shopping_caart", JSON.stringify(cart));
};
const clearTheCart = () => {
	localStorage.removeItem("shopping_cart");
};
const getStoredCart = () => {
	const exists = localStorage.getItem("shopping_cart");
	return exists ? JSON.parse(exists) : {};
};
export {addToDb, getStoredCart, removeFromDb, clearTheCart};
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
///////////////////////////////////////
// // // use local storage as your db for now
// // const addToDb = (id) => {
// // 	const exists = getDb();
// // 	let shopping_cart = {};
// // 	if (!exists) {
// // 		shopping_cart[id] = 1;
// // 	} else {
// // 		shopping_cart = JSON.parse(exists);
// // 		if (shopping_cart[id]) {
// // 			const newCount = shopping_cart[id] + 1;
// // 			shopping_cart[id] = newCount;
// // 		} else {
// // 			shopping_cart[id] = 1;
// // 		}
// // 	}
// // 	updateDb(shopping_cart);
// // };

// // const getDb = () => localStorage.getItem("shopping_cart");
// // const updateDb = (cart) => {
// // 	localStorage.setItem("shopping_cart", JSON.stringify(cart));
// // };

// // const removeFromDb = (id) => {
// // 	const exists = getDb();
// // 	if (!exists) {
// // 	} else {
// // 		const shopping_cart = JSON.parse(exists);
// // 		delete shopping_cart[id];
// // 		updateDb(shopping_cart);
// // 	}
// // };

// // const getStoredCart = () => {
// // 	const exists = getDb();
// // 	return exists ? JSON.parse(exists) : {};
// // };

// // const clearTheCart = () => {
// // 	localStorage.removeItem("shopping_cart");
// // };

// // export {addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart};
// //
// //
// ///
// //
///////////////////////////////////////
// //
// // use local storage as your db for now
// const addToDb = (id) => {
// 	const exists = getDb();
// 	let shopping_cart = {};
// 	if (!exists) {
// 		shopping_cart[id] = 1;
// 	} else {
// 		shopping_cart = JSON.parse(exists);
// 		if (shopping_cart[id]) {
// 			const newCount = shopping_cart[id] + 1;
// 			shopping_cart[id] = newCount;
// 		} else {
// 			shopping_cart[id] = 1;
// 		}
// 	}
// 	updateDb(shopping_cart);
// };

// const getDb = () => localStorage.getItem("shopping_cart");

// const updateDb = (cart) => {
// 	localStorage.setItem("shopping_cart", JSON.stringify(cart));
// };

// const removeFromDb = (id) => {
// 	const exists = getDb();
// 	if (!exists) {
// 	} else {
// 		const shopping_cart = JSON.parse(exists);
// 		delete shopping_cart[id];
// 		updateDb(shopping_cart);
// 	}
// };

// const getStoredCart = () => {
// 	const exists = getDb();
// 	return exists ? JSON.parse(exists) : {};
// };

// const clearTheCart = () => {
// 	localStorage.removeItem("shopping_cart");
// };

// export {addToDb, removeFromDb, clearTheCart, getStoredCart};
