import React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "20px",
    background: "transparent"
  },
  title: {
    fontFamily: theme.monoFont,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "30px",
    /* identical to box height, or 250% */
    textAlign: "center",
    letterSpacing: "4px",
    color: "#000000",
    marginBottom: "20px"
  },
  text: {
    marginTop: 30,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "26px",
    // display: "flex",
    // align-items: "center",
    textAlign: "center",
    letterSpacing: "0.833333px"
  }
}));

const TextSectionSmallTitle = () => {
  const { title, text } = props;
  const classes = useStyles();

  return (
    <div>
      <Typography classes={{ root: classes.title }}>{title}</Typography>
      <Typography classes={{ root: classes.text }}>{text}</Typography>
    </div>
  );
};

export default TextSectionSmallTitle;
