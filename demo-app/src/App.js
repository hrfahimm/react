import "./App.css";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "../src/components/Home/Home";
import Friends from "../src/components/Friends/Friends";
import About from "../src/components/About/About";
import NotFound from "../src/components/NotFound/NotFound";
import Header from "./components/Header/Header";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Culture from "./components/Culture/Culture";

export default function App() {
	return (
		<div>
			<Router>
				<Header></Header>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />

					<Route path="/friends" element={<Friends />}></Route>
					<Route path="/friend/:friendId" element={<FriendDetail />} />

					<Route exact path="/about" element={<About />} />
					<Route exact path="/about/:cultuer" element={<Culture />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
