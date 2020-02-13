import React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  wrapper: {
    marginTop: -1,
    paddingTop: 1
  },
  root: {
    paddingRight: "20px",
    paddingLeft: "20px",
    marginBottom: "60px !important",
    marginTop: "120px",
    background: "transparent"
  },
  title: {
    fontFamily: theme.monoFont,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "30px",
    textAlign: "center",
    letterSpacing: "4px",
    color: "#000000",
    marginBottom: "20px"
  },
  text: {
    marginTop: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "26px",
    textAlign: "center",
    letterSpacing: "0.833333px"
  }
}));

const TextSectionSmallTitle = props => {
  const { title, text } = props;
  const classes = useStyles();

  const id = title.toLowerCase().replace(/[\W]/g, "");

  return (
    <div className={classes.wrapper} id={id}>
      <div className={classes.root}>
        <Typography classes={{ root: classes.title }}>{title}</Typography>
        <Typography classes={{ root: classes.text }}>{text}</Typography>
      </div>
    </div>
  );
};

export default TextSectionSmallTitle;
