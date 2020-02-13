import React from "react";
import { Link } from "gatsby";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles(
  theme => ({
    menuButton: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 400,
      textTransform: "none",
      marginLeft: 60 - 8 - 8
      // color: theme.palette.primary.contrastText
    },
    bigButton: {
      background: "#323FD0",
      border: "2px solid #323FD0",
      borderRadius: "20px",
      height: 40,
      width: 165,
      "&:hover": {
        background: "#323FD0"
      }
    },
    text: {
      // fontFamily: "Red Hat Display",
      textTransform: "none",
      fontStyle: "normal",
      color: "#E6E7E9"
    },
    bigButtonText: {
      color: "#ffffff"
    }
  }),
  { index: 1 }
);

export const menuLinks = [
  {
    name: "Services",
    link: "/#services"
  },
  {
    name: "Events",
    link: "/#meetupsandevents"
  },
  {
    name: "Culture",
    link: "/#culture"
  }
];

const Menu = props => {
  const classes = useStyles();
  const { menuButton, bigButton, text, bigButtonText } = classes;

  return (
    <>
      {menuLinks.map(link => (
        <Link key={link.name} to={link.link}>
          <Button classes={{ root: menuButton }}>{link.name}</Button>
        </Link>
      ))}
      <Button
        classes={{
          root: `${menuButton} ${bigButton}`,
          label: `${text} ${bigButtonText}`
        }}
      >
        Schedule a call
      </Button>
    </>
  );
};

export default Menu;
