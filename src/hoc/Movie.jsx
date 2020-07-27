import React, { Component } from "react";
import { withToolTip } from "./withToolTip";

class Movie extends Component {
	render() {
		const { id, showToolTip } = this.props;
		return <div>{showToolTip ? `Movie_with_${id}` : "Movie"}</div>;
	}
}

export default withToolTip(Movie);
