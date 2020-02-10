import React from "react";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/styles/withStyles";

const styles = {
	rootEl: {
		background: "#323FD0 !important",
		border: "2px solid #323FD0 !important",
		borderRadius: "20px !important",
		height: "48px",
		width: "232px",
		margin: "0 auto !important",
	},
	text: {
		// fontFamily: "Red Hat Display",
		textTransform: "none",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "18px",
		lineHeight: "24px",
		color: "#E6E7E9",
	},
};

const ButtonBig = ({ classes, item = {} }) => {
	return (
		<Button classes={{ root: classes.rootEl, label: classes.text }}>
			{item.text}
		</Button>
	);
};

export default withStyles(styles)(ButtonBig);
