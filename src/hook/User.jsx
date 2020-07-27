import React, { Component } from "react";

class User extends Component {
	state = {
		user: {},
		isLoading: false,
	};
	fetchData() {
		this.setState({ isLoading: true });
		fetch("https://jsonplaceholder.typicode.com/users/" + this.props.pickedUser)
			.then(response => {
				if (!response.ok) {
					throw new Error("Failed to fetch...");
				}
				return response.json();
			})
			.then(result => {
				const user = {
					username: result.username,
				};
				this.setState({ user });
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				this.setState({ isLoading: false });
			});
	}

	componentDidMount() {
		console.log("componentDidMount");
		this.fetchData();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.pickedUser !== this.props.pickedUser) {
			console.log("componentDidUpdate");
			this.fetchData();
		}
	}

	componentWillUnmount() {
		console.log("componentWillUnmount");
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (
			nextProps.pickedUser !== this.props.pickedUser ||
			nextState.isLoading !== this.state.isLoading ||
			nextState.user.id !== this.state.user.id
		) {
			console.log("shouldComponentUpdate");
			return true;
		}
		return false;
	}

	render() {
		console.log("rendering...");
		return <div>{this.state.isLoading ? "loading..." : this.state.user.username}</div>;
	}
}

export default User;
