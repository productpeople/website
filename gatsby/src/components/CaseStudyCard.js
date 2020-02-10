import React from "react";
// import { withPrefix } from "gatsby";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";

const styles = {
	root: {
		borderRadius: "0px 0px 6px 6px",
		width: "331px",
		margin: "20px",
	},
	cardHeader: {
		height: "68px",
		background: "#000000",
		color: "#FFFFFF",
		textAlign: "center",
	},
	cardTitle: {
		// fontFamily: "Red Hat Display !important",
		fontStyle: "normal !important",
		fontWeight: "bold !important",
		fontSize: "24px !important",
		lineHeight: "32px !important",
		textAlign: "center",
		letterSpacing: "1px",
		color: "#FFFFFF !important",
	},
	cardSubtitle: {
		fontFamily: "Roboto Mono !important",
		fontStyle: "normal !important",
		fontWeight: "normal !important",
		fontSize: "12px !important",
		lineHeight: "32px !important",
		textAlign: "center",
		letterSpacing: "0.5px",
		color: "#FFFFFF !important",
	},
	cardMedia: {
		// height: "100%",
		objectFit: "cover",
		// width: "auto",
	},
};

const CaseStudyCard = ({ classes, item = {} }) => {
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.cardMedia}
					component="img"
					alt={item.title}
					height={item.imgHeight}
					// src={withPrefix(imgURL)}
					src={item.imgURL}
					title={item.title}
				/>
				<CardContent className={classes.cardHeader}>
					<Typography
						classes={{ root: classes.cardTitle }}
						component="h2"
					>
						{item.title}
					</Typography>
					<Typography
						classes={{ root: classes.cardSubtitle }}
						component="h3"
					>
						{item.subtitle}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default withStyles(styles)(CaseStudyCard);
