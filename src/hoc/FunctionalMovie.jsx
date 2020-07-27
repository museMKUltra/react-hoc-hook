import React from "react";
import { withToolTip } from "./withToolTip";

function FunctionalMovie(props) {
	const { user } = props;
	return <div>{`FunctionalMovie${user}`}</div>;
}

export default withToolTip(FunctionalMovie);
