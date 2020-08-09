import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { UserContext } from "./UserContext";

function TodoItems() {
	const { todoList, dispatch } = useContext(TodoContext);
	const { userList } = useContext(UserContext);

	function todoListItems(userContext) {
		return todoList.map(todo => {
			const user = userList.find(u => u.id === todo.userId);
			const name = user ? user.username : "";
			return (
				<li key={todo.id} className={"todo-items__li " + (todo.completed ? "todo-items__li--completed" : "")}>
					<input
						id={todo.id}
						type="checkbox"
						checked={todo.completed}
						onChange={() =>
							dispatch({
								type: "UPDATE_COMPLETED",
								todo,
							})
						}
					/>
					<label htmlFor={todo.id}>
						<p>{todo.title}</p>
						<small>
							<q>{name}</q>
						</small>
					</label>
					<div className={"todo-items__delete"}>
						<button
							onClick={() =>
								dispatch({
									type: "DELETE_TODO",
									todo,
								})
							}
						>
							delete
						</button>
					</div>
				</li>
			);
		});
	}

	return <UserContext.Consumer>{userContext => <ul className={"todo-items__ul"}>{todoListItems(userContext)}</ul>}</UserContext.Consumer>;
}

export default TodoItems;
