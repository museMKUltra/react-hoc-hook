import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./hoc/Movie";
import FunctionalMovie from "./hoc/FunctionalMovie";
import HookUsers from "./hook/HookUsers";
import TodoPage from "./context/TodoPage";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<TodoPage />
				<HookUsers />
				<Movie id={1} toolTip="movie_name" />
				<FunctionalMovie user="roller" toolTip="another_name" />
			</header>
		</div>
	);
}

export default App;
