import React from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import makeStyles from "@material-ui/styles/makeStyles";

import { title } from "../../config";

const useStyles = makeStyles(
  theme => ({
    divider: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 3
    },
    footer: {
      marginBottom: theme.spacing.unit * 3,
      whiteSpace: "nowrap"
    }
  }),
  { index: 1 }
);

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Divider className={classes.divider} />
      <footer className={classes.footer} id="footer">
        <span>
          <Typography variant="caption" component="span">
            ©{new Date().getFullYear()} {title}{" "}
            <Hidden only={["xs", "sm"]}>–</Hidden>
            <Hidden only={["xl", "lg", "md"]}>
              <br />
            </Hidden>{" "}
            {title}
          </Typography>
        </span>
      </footer>
    </>
  );
};

export default Footer;
