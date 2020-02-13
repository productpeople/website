import React from "react";
import Card from "@material-ui/core/Card";
import ButtonBig from "./ButtonBig";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";

const styles = theme => ({
  root: {},
  cardRoot: {
    padding: "140px 0px",
    background: "#FFFFFF",
    boxShadow: "0px 2px 50px rgba(0, 0, 0, 0.02) !important",
    borderRadius: 6,
    maxHeight: 580
  },
  cardContent: {
    margin: "auto"
  },
  title: {
    margin: "0 auto",
    textAlign: "center",
    maxWidth: "700px",
    fontWeight: 700,
    fontSize: "56px",
    lineHeight: "70px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
      lineHeight: "40px",
      marginBottom: "72px"
    }
  }
});

const TopSection = props => {
  const { classes, titleText, buttonText } = props;
  return (
    <div className={classes.root}>
      <Card classes={{ root: classes.cardRoot }} elevation={0}>
        <CardContent className={classes.cardContent}>
          <Typography classes={{ root: classes.title }} component="h1">
            {titleText}
          </Typography>
          <ButtonBig className={classes.button} text={buttonText} />
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)(TopSection);
