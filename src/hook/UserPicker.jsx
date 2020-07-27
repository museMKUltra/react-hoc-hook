import React, { Component } from "react";

class UserPicker extends Component {
	state = {
		users: [],
		isLoading: false,
	};

	componentDidMount() {
		this.setState({ isLoading: true });
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => {
				if (!response.ok) {
					throw new Error("Failed to fetch...");
				}
				return response.json();
			})
			.then(result => {
				const users = result.slice(0, 5).map(user => ({
					id: user.id,
					name: user.name,
				}));
				this.setState({ users });
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				this.setState({ isLoading: false });
			});
	}

	render() {
		const userList = this.state.users.map(user => {
			return <option key={user.id} value={user.id}>{`${user.id}. ${user.name}`}</option>;
		});
		return (
			<div>
				{this.state.isLoading ? (
					"loading..."
				) : (
					<select name="" id="" onChange={this.props.handlePickedUser}>
						{userList}
					</select>
				)}
			</div>
		);
	}
}

export default UserPicker;
