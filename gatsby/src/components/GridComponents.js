import React from "react";
import Grid from "@material-ui/core/Grid";
import Img from "gatsby-image";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(
  {
    root: {
      marginTop: 40,
    },
    imageContainer: {
      width: "100%",
      maxWidth: 185,
      margin: "auto",
      // padding: "40px 25px",
      filter: "grayscale(1)",
      opacity: 0.5
    },
    grid: {
      // We add double the horizontal padding to the max width
      maxWidth: 185 + 25 + 25,
      display: "flex",
      padding: "40px 25px",
      alignItems: "center"
    }
  },
  { index: 1 }
);

export const GridContainer = props => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        {children}
      </Grid>
    </div>
  );
};

export const GridItemImageFactory = images => {
  const GridImageItem = props => {
    const { imageURL, altText } = props;
    const classes = useStyles();

    const image = images.find(i => i && i.relativePath === imageURL);
    if (!image) {
      return null;
    }

    return (
      <Grid className={classes.grid} item xs={6} md={3}>
        <Img
          className={classes.imageContainer}
          fixed={image.childImageSharp.fixed}
          fluid={image.childImageSharp.fluid}
          alt={altText}
        />
      </Grid>
    );
  };
  return GridImageItem;
};
