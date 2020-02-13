import React from "react";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "24px",
  lineHeight: "32px",
  textAlign: "center",
  letterSpacing: "1px",
  color: "black",
  marginTop: "80px",
  marginBottom: "36px"
}));

const Header2 = props => {
  const { text } = props;
  const classes = useStyles();

  return <Typography component="h2">{text}</Typography>;
};

export default Header2;
