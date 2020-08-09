import React, { useEffect, useState } from "react";

export const UserContext = React.createContext(undefined);
UserContext.displayName = "UserContext";

function UserContextProvider(props) {
	const [userList, setUserList] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => {
				if (!response.ok) {
					throw new Error("Failed to fetch...");
				}
				return response.json();
			})
			.then(result => {
				const userList = result.map(r => ({ id: r.id, username: r.username }));
				setUserList(userList);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return <UserContext.Provider value={{ userList }}>{props.children}</UserContext.Provider>;
}

export default UserContextProvider;
