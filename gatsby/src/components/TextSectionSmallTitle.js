import React from "react";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";

const styles = {
  root: {
    padding: "20px",
    background: "transparent"
  },
  title: {
    fontFamily: "Roboto Mono",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "30px",
    /* identical to box height, or 250% */
    textAlign: "center",
    letterSpacing: "4px",
    color: "#000000"
  },
  text: {
    fontFamily: "Red Hat Display",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "26px",
    // display: "flex",
    // align-items: "center",
    textAlign: "center",
    letterSpacing: "0.833333px"
  }
};

const TextSectionSmallTitle = ({ classes, title, text }) => {
  return (
    <div>
      <Typography classes={{ root: classes.title }}>{title}</Typography>
      <Typography classes={{ root: classes.text }}>{text}</Typography>
    </div>
  );
};

export default withStyles(styles)(TextSectionSmallTitle);
