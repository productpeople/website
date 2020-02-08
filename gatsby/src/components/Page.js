import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid, Typography } from "@material-ui/core";
import withStyles from "@material-ui/styles/withStyles";
import "../css/style.styl";

const styles = {
  container: {
    marginTop: 94,
  },
  contentBox: {
    maxWidth: "calc(1136px - 60px)",
    width: "calc(100% - 60px)",
  },
  title: {
    textAlign: "center"
  }
};

class Page extends React.Component {
  render() {
    const { classes, title, children } = this.props;
    return (
      <>
        <Header />
        <Grid
          className={classes.container}
          container
          direction="row"
          justify="center"
        >
          <Grid
            className={classes.contentBox}
            item
          >
            {title ? (
              <Typography
                className={classes.title}
                variant="h2"
                gutterBottom
              >
                {title}
              </Typography>
            ) : null}
            {children}
            <Footer />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Page);
