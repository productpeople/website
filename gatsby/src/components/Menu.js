import React from "react";
import { Link } from "gatsby";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { GithubCircle } from "mdi-material-ui";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles(
  theme => ({
    menuButton: {
      color: theme.palette.primary.contrastText
    }
  }),
  { index: 1 }
);

export const menuLinks = [
  {
    name: "Foo",
    link: "/foo"
  }
];

const Menu = props => {
  const classes = useStyles();

  return (
    <>
      {menuLinks.map(link => (
        <Link key={link.name} to={link.link}>
          <Button className={classes.menuButton}>{link.name}</Button>
        </Link>
      ))}
      <a
        href="https://github.com/bluepeter/gatsby-material-ui-business-starter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton className={classes.menuButton}>
          <GithubCircle />
        </IconButton>
      </a>
    </>
  );
};

export default Menu;
