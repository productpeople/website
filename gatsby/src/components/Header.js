import React from "react";
import { Link } from "gatsby";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import { MaterialUi } from "mdi-material-ui";

import { title } from "../../config";

import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

const Header = () => {
  return (
    <AppBar id="appBar">
      <Toolbar>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          spacing={16}
        >
          <Grid item>
            <Chip
              id="logo"
              variant="outlined"
              avatar={
                <Avatar id="logoIcon">
                  <MaterialUi />
                </Avatar>
              }
              label={<Link to="/">{title}</Link>}
            />
          </Grid>
          <Grid item>
            <Hidden smDown>
              <Typography component="span" variant="caption">
                <Menu />
              </Typography>
            </Hidden>
            <Hidden mdUp>
              <MenuMobile />
            </Hidden>
          </Grid>
        </Grid>
        <Grid item />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
