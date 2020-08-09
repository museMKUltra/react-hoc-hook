import React, { useEffect, useReducer } from "react";
import todoReducer from "./TodoReducer";
export const TodoContext = React.createContext(undefined);
TodoContext.displayName = "TodoContext";

function getInitializerArg() {
	return {
		todoList: [],
		isLoading: false,
	};
}

function TodoContextProvider(props) {
	const [state, dispatch] = useReducer(todoReducer, getInitializerArg(), getInitializerArg);

	useEffect(() => {
		dispatch({
			type: "SET_IS_LOADING",
			status: true,
		});
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then(response => {
				if (!response.ok) {
					throw new Error("Failed to fetch...");
				}
				return response.json();
			})
			.then(result => {
				const interval = ~~(result.length / 5);
				dispatch({
					type: "SET_TODO_LIST",
					todoList: result.filter((r, i) => i % interval === 0),
				});
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				dispatch({
					type: "SET_IS_LOADING",
					status: false,
				});
			});
	}, []);

	return (
		<TodoContext.Provider
			value={{
				todoList: state.todoList,
				isLoading: state.isLoading,
				dispatch,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
}

export default TodoContextProvider;
