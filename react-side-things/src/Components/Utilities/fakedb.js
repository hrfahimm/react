//use localstorage

const addToDb = (id) => {
	const exists = getDb();
	let shoping_card = {};
	if (!exists) {
		shoping_card[id] = 1;
	} else {
		shoping_card = JSON.parse(exists);
		if (shoping_card[id]) {
			const newCount = shoping_card[id] + 1;
			shoping_card[id] = newCount;
		} else {
			shoping_card[id] = 1;
		}
	}
	updateDb(shoping_card);
};
const getDb = () => localStorage.getItem("shoping_card");
const updateDb = (cart) => {
	localStorage.setItem("shoping_card", JSON.stringify(cart));
};
const removeFromDb = (id) => {
	const exists = getDb();
	if (!exists) {
	} else {
		const shoping_card = JSON.parse(exists);
		delete shoping_card[id];
		updateDb(shoping_card);
	}
};
export {addToDb, removeFromDb as deleteFromDb};
