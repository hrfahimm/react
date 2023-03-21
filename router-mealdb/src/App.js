import "./App.css";
import ReactDOM from "react-dom/client";
import Home from "../src/components/Home/Home";
import Header from "../src/components/Header/Header";
import Meal from "../src/components/Meal/Meal";
import Meals from "../src/components/Meals/Meals";
import NotFound from "../src/components/NotFound/NotFound";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header></Header>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/meals" element={<Meals />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
