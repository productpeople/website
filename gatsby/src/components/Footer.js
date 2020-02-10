import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  divider: {
    marginTop: theme.spacing.unit * 6,
    marginBottom: theme.spacing.unit * 3
  },
  footer: {
    marginBottom: theme.spacing.unit * 3,
    whiteSpace: "nowrap"
  }
}));

const Footer = props => {
  const classes = useStyles();
  const {
    data: {
      site: {
        siteMetadata: {
          title,
          contact: { email, phone }
        }
      }
    }
  } = props;

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
            {email} – {phone}
            <br />
            &middot;
            <br />
            Starter created by{" "}
            <a href="https://foxandgeese.com">Fox and Geese</a>
          </Typography>
        </span>
      </footer>
    </>
  );
};

const Wrapped = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              contact {
                email
                phone
              }
            }
          }
        }
      `}
      render={data => {
        return <Footer data={data} />;
      }}
    />
  );
};

export default Wrapped;
