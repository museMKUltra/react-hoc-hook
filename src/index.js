import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	// <React.StrictMode>
	// 	<App />
	// </React.StrictMode>,
	<App />,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// higher order function

function addition(xx, yy) {
	const result = xx + yy;
	console.log(result);
}
addition(2, 3);
addition(2, 4);

function addition1(xx) {
	return function (yy) {
		const result = xx + yy;
		console.log(result);
	};
}
const addTwo1 = addition1(2);
addTwo1(3);
addTwo1(4);

function addition2() {
	const xx = 2;
	return function (yy) {
		const result = xx + yy;
		console.log(result);
	};
}
const addTwo2 = addition2();
addTwo2(3);
addTwo2(4);

function addition3() {
	const xx = 2;
	return function (fun) {
		const result = xx + fun();
		console.log(result);
	};
}
const addTwo3 = addition3();
addTwo3(() => 1 * 3);
addTwo3(() => 2 * 2);

function addition4() {
	const xx = 2;
	return function (fun) {
		const result = fun(xx);
		console.log(result);
	};
}
const addTwo4 = addition4();
addTwo4(x => x + 1 * 3);
addTwo4(x => x + 2 * 2);
