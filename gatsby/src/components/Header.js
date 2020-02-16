import React from "react";
import { Link } from "gatsby";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import makeStyles from "@material-ui/styles/makeStyles";

import { background } from "../../config";

const useStyles = makeStyles(
  theme => ({
    container: {
      // flexGrow: 1
    },
    appBar: {
      backgroundColor: background,
      boxShadow: "none"
    },
    toolbar: {
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: 20,
      paddingLeft: 14,
      paddingRight: 14,
      width: "100vw",
      [theme.breakpoints.up("md")]: {
        maxWidth: "calc(1136px - 44px)",
        width: "calc(100% - 44px)"
      }
    },
    logoWrapper: {
      flexGrow: 1
    },
    logo: {
      maxHeight: 37,
      [theme.breakpoints.up("md")]: {
        maxHeight: 50
      }
    }
  }),
  { index: 1 }
);

const Header = () => {
  const classes = useStyles();
  const { appBar } = classes;

  return (
    <div className={classes.container}>
      <AppBar positoin="static" id="appBar" classes={{ root: appBar }}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.logoWrapper}>
            <img
              src="/images/product-people-logo@2x.png"
              alt="Product People Logo"
              className={classes.logo}
            />
          </Link>
          <Hidden smDown>
            <Menu />
          </Hidden>
          <Hidden mdUp>
            <MenuMobile />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
