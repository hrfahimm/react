import logo from "./logo.svg";
import "./App.css";
import {useState} from "react";

function App() {
	return (
		<div className="App">
			<Counter></Counter>
			<LoadComments></LoadComments>
		</div>
	);
}
function LoadComments() {
	const [comments, setComments] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((data) => setComments(data));
	}, []);
	return (
		<div>
			<h2> Load comment</h2>
			{comments.map((comment) => (
				<Comment title={comment.title} body={comment.body}></Comment>
			))}
		</div>
	);
}

function Comment(props) {
	return (
		<div style={{backgroundColor: "skyblue", margim: "20px"}}>
			<h4>{props.title}</h4>
			<p>{props.body}</p>
		</div>
	);
}

function Counter() {
	const [count, setCount] = useState(0);
	const handelIncrease = () => setCount(count + 1);
	const handelDecress = () => setCount(count - 1);
	return (
		<div>
			<h2>Count:{count}</h2>
			<button onClick={handelIncrease}>Incrise:</button>
			<button onClick={handelDecress}>Decriss:</button>
		</div>
	);
}

export default App;
