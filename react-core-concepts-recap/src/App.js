import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<MyComponent></MyComponent>
			<MyComponent></MyComponent>
			<MyComponent></MyComponent>
		</div>
	);
}
function MyComponent() {
	const myStyle = {
		backgroundColor: "blue",
		border: "3px solid red",
		margin: "20px",
	};
	return (
		<div style={myStyle}>
			<h2>yo yo fahim khan</h2>
		</div>
	);
}
export default App;
