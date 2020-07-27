import React from "react";

export function withToolTip(Component) {
	return class WithToolTip extends React.Component {
		state = {
			showToolTip: false,
		};

		render() {
			const { showToolTip } = this.state;
			const { toolTip } = this.props;
			return (
				<div className="with-tool-tip" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
					<Component {...this.props} showToolTip={showToolTip} />
					{showToolTip && <p className="with-tool-tip__content">{toolTip}</p>}
				</div>
			);
		}

		mouseOut = () => this.setState({ showToolTip: false });

		mouseOver = () => this.setState({ showToolTip: true });
	};
}
