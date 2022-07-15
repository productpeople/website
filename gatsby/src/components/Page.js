import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
//import CookieBanner from "react-cookie-banner";
import CookieConsent from "react-cookie-consent";

import "../css/style.styl";

import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles(
  theme => ({
    container: {
      marginTop: 94
    },
    contentBox: {
      [theme.breakpoints.up("md")]: {
        maxWidth: "calc(1136px - 44px)",
        width: "calc(100% - 44px)"
      }
    },
    title: {
      textAlign: "center"
    }
  }),
  { index: 1 }
);

const Page = props => {
  const classes = useStyles();
  const { title, children } = props;

  return (
    <>
      <Header />
      <Grid
        className={classes.container}
        container
        direction="row"
        justify="center"
      >
        <Grid className={classes.contentBox} item>
          {title ? (
            <Typography className={classes.title} variant="h2" gutterBottom>
              {title}
            </Typography>
          ) : null}
          {children}
          <Footer />
        </Grid>
      </Grid>
      {/* <CookieBanner
        message="Cookies help us to improve. By continuing to browse the site you're accepting our cookies ."
        dismissOnScroll={true}
        styles={{
          banner: {
            position: "fixed",
            bottom: 0,
            background: "#F2F2F2",
            padding: 4,
            height: ""
          },
          message: {
            color: "#9B9B9B",
            lineHeight: ""
          },
          button: {
            display: "none"
          }
        }}
        // buttonMessage="Well well well"
      /> */}
      <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="Cookie Policy"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
      </CookieConsent>
    </>
  );
};

export default Page;
