import "./App.css";
import {useState} from "react";
import User from "./Components/User/User";

function App() {
	const [familiar, setFamiliar] = useState(false);
	return (
		<div className="App">
			<h2>is Familiar---: {familiar.toString()} </h2>
			<button onClick={() => setFamiliar(!familiar)}>Toggle Friend</button>
			<User familiar={familiar} />
		</div>
	);
}

export default App;
