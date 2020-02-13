import React from "react";
// import { withPrefix } from "gatsby";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";

const styles = theme => ({
  root: {
    borderRadius: "6px 6px 6px 6px",
    width: "331px",
    margin: "20px"
  },
  cardHeader: {
    height: "100px",
    background: "#000000",
    color: "#FFFFFF",
    textAlign: "center",
    padding: "19px"
  },
  cardTitle: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "32px",
    textAlign: "center",
    letterSpacing: "1px",
    color: "#FFFFFF"
  },
  cardSubtitle: {
    fontFamily: theme.monoFont,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "32px",
    textAlign: "center",
    letterSpacing: "0.5px",
    color: "#FFFFFF"
  },
  cardMedia: {
    objectFit: "cover"
  }
});

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
          <Typography classes={{ root: classes.cardTitle }} component="h2">
            {item.title}
          </Typography>
          <Typography classes={{ root: classes.cardSubtitle }} component="h3">
            {item.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(CaseStudyCard);
