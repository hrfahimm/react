import "./App.css";
import About from "./components/About/About";
import Friends from "./components/Friends/Friends";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";

import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/home">
						<Home></Home>
					</Route>
					<Route path="/about">
						<About></About>
					</Route>
					<Route path="/friend">
						<Friends></Friends>
					</Route>
					<Route path="/notfound">
						<NotFound></NotFound>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
