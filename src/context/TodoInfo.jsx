import React, { useContext } from "react";
import TodoItems from "./TodoItems";
import { TodoContext } from "./TodoContext";

function TodoInfo() {
	const { isLoading } = useContext(TodoContext);
	return (
		<div>
			{<header>{isLoading ? "loading..." : "Title"}</header>}
			<TodoItems />
		</div>
	);
}

export default TodoInfo;
