import React, { useState } from "react";
import { Link } from "gatsby";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import IconButton from "@material-ui/core/IconButton";
import { DotsVertical } from "mdi-material-ui";
import makeStyles from "@material-ui/styles/makeStyles";

import { menuLinks } from "./Menu";

const useStyles = makeStyles(
  theme => ({
    dotsVerticalIcon: {
      color: "#efefef"
    }
  }),
  { index: 1 }
);

const MenuMobile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <DotsVertical className={classes.dotsVerticalIcon} />
      </IconButton>
      <ClickAwayListener onClickAway={handleClose}>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {menuLinks.map(link => (
            <Link key={link.name} to={link.link}>
              <MenuItem>{link.name}</MenuItem>
            </Link>
          ))}
        </Menu>
      </ClickAwayListener>
    </>
  );
};

export default MenuMobile;
