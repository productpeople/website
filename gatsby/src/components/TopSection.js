import React from "react";
import Card from "@material-ui/core/Card";
import ButtonBig from "./ButtonBig";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";

import { scheduleACallURL } from "../../config";

const styles = theme => ({
  root: {},
  cardRoot: {
    padding: "100px 0px",
    boxShadow: "0px 2px 50px rgba(0, 0, 0, 0.02)",
    borderRadius: 6,
    maxHeight: 580,
    background: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      padding: "90px 0px 0px",
      background: "transparent",
      boxShadow: "none"
    }
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
    [theme.breakpoints.down("sm")]: {
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
          <Typography classes={{ root: classes.title }} component="h2">
            {titleText}
          </Typography>
          <ButtonBig
            className={classes.button}
            text={buttonText}
            link={scheduleACallURL}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)(TopSection);
