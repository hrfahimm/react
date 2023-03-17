//const db = {};
//console.log(db);
const addToDb = (item) => {
	const db = getDb();
	if (item in db) {
		db[item] = db[item] + 1;
	} else {
		db[item] = 1;
	}
	saveTodb(db);
};
const removeFromDb = (item) => {
	const db = getDb();

	delete db[item];
	saveTodb(db);
};
const saveTodb = (db) => {
	const dbJSON = JSON.stringify(db);
	localStorage.setItem("shopping-cart", dbJSON);
};
const getDb = () => {
	let saveDb = localStorage.getItem("shopping-cart");
	saveDb = JSON.parse(saveDb);
	//console.log(typeof saveDb, saveDb);
	//const db = {};
	return saveDb;
};
