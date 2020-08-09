export default function todoReducer(state, action) {
	switch (action.type) {
		case "SET_TODO_LIST":
			return setTodoList(state, action);
		case "UPDATE_COMPLETED":
			return updateToDoCompleted(state, action);
		case "DELETE_TODO":
			return deleteTodoItem(state, action);
		case "SET_IS_LOADING":
			return setIsLoading(state, action);
		default:
			return state;
	}
}

function setTodoList(state, action) {
	return { ...state, todoList: action.todoList };
}

function updateToDoCompleted(state, action) {
	const todoList = state.todoList.map(t => {
		if (t.id === action.todo.id) {
			return { ...t, completed: !action.todo.completed };
		}
		return { ...t };
	});
	return { ...state, todoList };
}

function deleteTodoItem(state, action) {
	const todoList = state.todoList.filter(t => {
		return t.id !== action.todo.id;
	});
	return { ...state, todoList };
}

function setIsLoading(state, action) {
	return { ...state, isLoading: action.status };
}
