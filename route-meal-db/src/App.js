import "./App.css";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./src/components/Home/Home";
import Header from "./components/Header/Header";
import Restaurant from "./components/Restaurant/Restaurant";
import Meal from "./components/Meal/Meal";
import MealDetail from "./components/MealDetail/MealDetail";
import NotFound from "./components/NotFound/NotFound";

export default function App() {
	return (
		<div className="App">
			<Router>
				<Header></Header>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route exact path="/restaurant" element={<Restaurant />} />

					<Route path="/restaurant/:meal" element={<Meal />} />

					<Route path="/restaurant/:meal/:mealdetail" element={<MealDetail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
