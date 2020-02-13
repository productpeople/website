import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid, Typography } from "@material-ui/core";
import "../css/style.styl";
import { makeStyles } from "@material-ui/styles";

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
    </>
  );
};

export default Page;
