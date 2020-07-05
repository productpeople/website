import React from "react";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";

import makeStyles from "@material-ui/styles/makeStyles";

import { imprintPath, termsPath, privacyPath } from "../../config";

const useStyles = makeStyles(
  theme => ({
    container: {
      width: "95%",
      margin: "auto"
    },
    container2: {
      maxWidth: "470px",
      margin: "auto"
    },
    divider: {
      height: "3px",
      backgroundColor: "rgba(0,0,0,1)",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing.unit * 7,
      marginBottom: theme.spacing.unit * 7,
      [theme.breakpoints.down("md")]: {
        width: "70%",
        marginTop: theme.spacing.unit * 8,
        marginBottom: theme.spacing.unit * 6
      }
    },
    footer: {
      marginBottom: theme.spacing.unit * 7.5,
      [theme.breakpoints.down("md")]: {}
    },
    logoWrapper: {
      flexGrow: 1,
      display: "flex",
      marginBottom: "40px"
    },
    logo: {
      maxHeight: 50,
      [theme.breakpoints.down("md")]: {
        maxHeight: 37,
        margin: "auto"
      }
    },
    tagline: {
      width: "100%",
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "1px",
      color: "#000000",
      textAlign: "left",
      [theme.breakpoints.down("md")]: {
        fontSize: "20px",
        lineHeight: "26px",
        letterSpacing: "0.833333px",
        textAlign: "center"
      }
    },
    quickLinksTitle: {
      fontSize: "18px",
      fontWeight: "700",
      lineHeight: "24px",
      letterSpacing: "0.75px",
      color: "#000000",
      textAlign: "left"
    },
    quickLinksDivFloatLeft: {
      float: "left",
      width: "50%",
      [theme.breakpoints.down("md")]: {
        marginTop: "50px"
      }
    },
    quickLinksListItem: {
      textAlign: "left",
      marginTop: "16px",
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.857143px",
      color: "black",
      [theme.breakpoints.down("md")]: {
        textAlign: "center"
      }
    },
    quickLinksLink: {
      color: "black",
      "&:visited": {
        color: "black"
      }
    }
  }),
  { index: 1 }
);

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Divider className={classes.divider} />
      <footer className={classes.footer} id="footer">
        <Grid container>
          <Grid item xs={12} lg={6}>
            <div className={classes.container2}>
              <Link href="/" className={classes.logoWrapper}>
                <img
                  src="/images/product-people-logo@2x.png"
                  alt="Product People Logo"
                  className={classes.logo}
                />
              </Link>
              <Typography classes={{ root: classes.tagline }} component="h4">
                Good companies manage engineering. Great companies manage
                product.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div
              style={{
                height: "100%",
                weight: "100%"
              }}
            >
              <Hidden mdDown>
                <Typography
                  classes={{ root: classes.quickLinksTitle }}
                  component="h5"
                >
                  Quick Links
                </Typography>
              </Hidden>
              <div className={classes.quickLinksDivFloatLeft}>
                <div className={classes.quickLinksListItem}>
                  <a className={classes.quickLinksLink} href="#clients">
                    Clients
                  </a>
                </div>
                <div className={classes.quickLinksListItem}>
                  <a className={classes.quickLinksLink} href="#capabilities">
                    Capabilities
                  </a>
                </div>
                <div className={classes.quickLinksListItem}>
                  <a className={classes.quickLinksLink} href="#casestudies">
                    Case Studies
                  </a>
                </div>
                <div className={classes.quickLinksListItem}>
                  <a
                    className={classes.quickLinksLink}
                    href="#communityevents"
                  >
                    Community
                  </a>
                </div>
              </div>
              <div className={classes.quickLinksDivFloatLeft}>
                <div className={classes.quickLinksListItem}>
                  <a className={classes.quickLinksLink} href="#culture">
                    Culture
                  </a>
                </div>
                <div className={classes.quickLinksListItem}>
                  <a className={classes.quickLinksLink} href={imprintPath}>
                    Imprint
                  </a>
                </div>
                <div className={classes.quickLinksListItem}>
                  <a className={classes.quickLinksLink} href={termsPath}>
                    Terms
                  </a>
                </div>
                <div className={classes.quickLinksListItem}>
                  <a className={classes.quickLinksLink} href={privacyPath}>
                    Privacy
                  </a>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
};

export default Footer;
