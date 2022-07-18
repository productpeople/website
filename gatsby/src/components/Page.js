import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CookieBanner from "react-cookie-banner";

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
      <CookieBanner
        message="Cookies help us to improve our site. By continuing to browse the site you're accepting our cookies."
        expires={6000}
        dismissOnScroll= {false}
        dismissOnClick={false}
        styles={{
          banner: { background: '#F5F6FF', position: 'fixed', bottom: 0, color: 'white',  padding: 4 , height: "" },
          message: { fontWeight: 500, color: '#000000', font: 'Red Hat Display' },
          button: {display:"", paddingright:10}
        }}
         //dismissOnScroll= {false}
        //dismissOnScrollThreshold= {400}
        //dismissOnClick={false}
        //onAccept={() => {}}
        //cookie="user-has-accepted-cookies"
      
        // styles={{
        //   banner: {
        //     position: "fixed",
        //     bottom: 0,
        //     background: "#F2F2F2",
        //     padding: 4,
        //     height: ""
        //   },
        //   message: {
        //     color: "#9B9B9B",
        //     lineHeight: ""
        //   }
        //   // button: {
        //   //   display: "none"
        //   // }
        // }}
       // buttonMessage="Accept"
      />
    </>
  );
};

export default Page;
