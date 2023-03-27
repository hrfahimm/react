import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import OrderReview from "./Components/OrderReview/OrderReview";
import NotFound from "./Components/NotFound/NotFound";
import Inventory from "./Components/Inventory/Inventory";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header></Header>
				<Routes>
					<Route path="/" element={<Shop />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/review" element={<OrderReview />} />
					<Route path="/inventory" element={<Inventory />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
