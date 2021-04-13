import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
	const [count, setcount] = useState(0);
	return (
		<div className="App">
			<header>
				<h1>Hello</h1>
			</header>
			<h2> Current Value of Count is {count}</h2>
			<button onClick={() => setcount(0)}>Reset Counter</button>
			<button onClick={() => (count > 10 ? "" : setcount(count + 1))}>
				Increase Counter
			</button>
			<button onClick={() => (count < 1 ? "" : setcount(count - 1))}>
				Decrease Counter
			</button>
		</div>
	);
}

export default App;
