import React from "react";
import { useHttp } from "./http";

function HookUserPicker(props) {
	const [data, isLoading] = useHttp("https://jsonplaceholder.typicode.com/users");
	const users = !data
		? []
		: data.slice(0, 5).map(user => ({
				id: user.id,
				name: user.name,
		  }));
	const userList = users.map(user => {
		return <option key={user.id} value={user.id}>{`${user.id}. ${user.name}`}</option>;
	});
	return (
		<div>
			{isLoading ? (
				"loading..."
			) : (
				<select name="" id="" onChange={props.handlePickedUser}>
					{userList}
				</select>
			)}
		</div>
	);
}

export default HookUserPicker;
