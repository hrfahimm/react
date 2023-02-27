//import logo from "./logo.svg";
import "./App.css";
import Device from "./Components/Device/Device";
import {useEffect, useState} from "react";
 
import Books from "./Components/Books/Books";

function App() {
	const [steps, setSteps] = useState(0);
	const books = [
		{name: "small giant", authore: "bokwmo"},
		{name: "dfndj giant", authore: "js"},
		{name: "small hwd", authore: "cgj"},
		{name: "6eyek giant", authore: "raty"},
	];
	const hendelWalk = () => {
		const newStepsCount = steps + 1;
		setSteps(newStepsCount);
	};
	useEffect(() => {
		console.log(steps);
	}, [steps]);
	return (
		<div className="App">
			<h3>My steps {steps}</h3>
			<button onClick={hendelWalk}>Walk</button>
			<Device name="phone" steps={steps} price="172"></Device>
			 
			<Books books={books}></Books>
		</div>
	);
}

export default App;
