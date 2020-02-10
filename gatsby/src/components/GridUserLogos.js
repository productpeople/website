import React from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/styles/withStyles";

const styles = {
	image: {
		width: "100%",
		margin: "auto",
		// padding: "20px !important",
	},
};

const GridUserLogos = ({ classes, item = {} }) => {
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				{item.map(logo => (
					<Grid item xs={6} sm={4}>
						<img className={classes.image} src={logo.logoURL} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default withStyles(styles)(GridUserLogos);
