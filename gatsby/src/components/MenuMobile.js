import React, { useState } from "react";
import { Link } from "gatsby";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/styles/makeStyles";

import { menuLinks } from "./Menu";

const useStyles = makeStyles(
  theme => ({
    icon: {
      width: 34
    },
    menuPaper: {
      position: "absolute",
      background: "#ffffff",
      padding: "80px 40px",
      top: 80,
      left: "50vw",
      width: "80vw",
      marginLeft: "-40vw",
      boxShadow: "0px 2px 50px rgba(0, 0, 0, 0.05)"
    },
    menuClosed: {
      display: "none"
    },
    menuItemRoot: {
      fontSize: "30px",
      lineHeight: "40px",
      fontWeight: 700,
      padding: 30
    },
    dotsVerticalIcon: {
      color: "#efefef"
    }
  }),
  { index: 1 }
);

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const { menuPaper, menuClosed, menuItemRoot } = classes;

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const src = `/images/icon-menu-${isOpen ? "open" : "closed"}.png`;

  return (
    <>
      <ClickAwayListener onClickAway={handleClose}>
        <div>
          <IconButton onClick={handleButtonClick}>
            <img
              className={classes.icon}
              src={src}
              alt={isOpen ? "Close the menu" : "Open the menu"}
            />
          </IconButton>
          <Paper
            elevation={0}
            className={`${menuPaper} ${isOpen ? "" : menuClosed}`}
          >
            <MenuList>
              {menuLinks.map(link => (
                <Link key={link.name} to={link.link} onClick={handleClose}>
                  <MenuItem classes={{ root: menuItemRoot }}>
                    {link.name}
                  </MenuItem>
                </Link>
              ))}
            </MenuList>
          </Paper>
        </div>
      </ClickAwayListener>
    </>
  );
};

export default MenuMobile;
