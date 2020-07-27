import React, { useEffect } from "react";
import { useHttp } from "./http";

function HookUser(props) {
	const [data, isLoading] = useHttp(`https://jsonplaceholder.typicode.com/users/${props.pickedUser}`);
	const user = !data
		? {}
		: {
				username: data.username,
		  };

	useEffect(() => {
		return () => {
			console.log("clean up...");
		};
	}, []);

	console.log("rendering...");
	return <div>{isLoading ? "loading..." : user.username}</div>;
}

export default React.memo(HookUser, (prevProps, nextProps) => {
	return prevProps.pickedUser === nextProps.pickedUser;
});
