import React from "react";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/styles/withStyles";

const styles = {
  rootEl: {
    background: "#323FD0",
    border: "2px solid #323FD0",
    borderRadius: "20px",
    height: "48px",
    width: "232px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "48px",
    "&:hover": {
      background: "#323FD0"
    }
  },
  text: {
    // fontFamily: "Red Hat Display",
    textTransform: "none",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#E6E7E9"
  }
};

const ButtonBig = props => {
  const { classes, text, link } = props;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Button classes={{ root: classes.rootEl, label: classes.text }}>
        {text}
      </Button>
    </a>
  );
};

export default withStyles(styles)(ButtonBig);
