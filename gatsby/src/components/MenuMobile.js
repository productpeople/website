import React from "react";
import { Link } from "gatsby";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import IconButton from "@material-ui/core/IconButton";
import { DotsVertical } from "mdi-material-ui";
import makeStyles from "@material-ui/styles/makeStyles";

import { menuLinks } from "./Menu";

const useStyles = makeStyles(theme => ({
  dotsVerticalIcon: {
    color: "#efefef"
  }
}));

class MenuMobile extends React.Component {
  state = {
    anchorEl: null
  };

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const classes = useStyles();
    const { anchorEl } = this.state;

    return (
      <>
        <IconButton onClick={this.handleOpen}>
          <DotsVertical className={classes.dotsVerticalIcon} />
        </IconButton>
        <ClickAwayListener onClickAway={this.handleClose}>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            {menuLinks.map(link => (
              <Link key={link.name} to={link.link}>
                <MenuItem>{link.name}</MenuItem>
              </Link>
            ))}
            <a
              href="https://github.com/bluepeter/gatsby-material-ui-business-starter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenuItem>Fork me on Github</MenuItem>
            </a>
          </Menu>
        </ClickAwayListener>
      </>
    );
  }
}

export default MenuMobile;
