import React from "react";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/styles/withStyles";

const styles = {
	root: {
		background: "#323FD0",
		border: "2px solid #323FD0",
		borderRadius: "20px",
	},
};

const ButtonBig = ({ classes, item = {} }) => {
	return <Button className={classes.root}>{item.text}</Button>;
};

export default withStyles(styles)(ButtonBig);
