import React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
// import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(
  theme => ({
    root: {
      // padding: "20px",
      background: "transparent",
      marginTop: 120
    },
    title: {
      fontFamily: theme.monoFont,
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "30px",
      textAlign: "center",
      letterSpacing: 4,
      color: "#000000",
      marginTop: "120px",
      marginBottom: "20px"
    },
    text: {
      marginTop: 20,
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 20,
      lineHeight: "26px",
      textAlign: "center",
      letterSpacing: "0.833333px"
    }
  })
  // { index: -100 }
);

const TextSectionSmallTitle = props => {
  const { title, text } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography classes={{ root: classes.title }}>{title}</Typography>
      <Typography classes={{ root: classes.text }}>{text}</Typography>
    </div>
  );
};

export default TextSectionSmallTitle;
