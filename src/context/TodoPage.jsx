import React from "react";
import TodoInfo from "./TodoInfo";
import UserContextProvider from "./UserContext";
import TodoContextProvider from "./TodoContext";

function TodoPage() {
	return (
		<TodoContextProvider>
			<UserContextProvider>
				<TodoInfo />
			</UserContextProvider>
		</TodoContextProvider>
	);
}

export default TodoPage;
