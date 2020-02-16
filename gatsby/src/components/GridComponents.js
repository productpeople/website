import React from "react";
import Grid from "@material-ui/core/Grid";
import Img from "gatsby-image";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(
  {
    root: {
      marginTop: 100,
      maxWidth: 750
    },
    image: {
      width: "100%",
      // We add double the horizontal padding to the max width
      maxWidth: 185 + 25 + 25,
      margin: "auto",
      padding: "40px 25px",
      filter: "grayscale(1)",
      opacity: 0.5
    },
    grid: {
      display: "flex",
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
      <Grid className={classes.grid} item xs={6} md={4}>
        <Img fixed={image.childImageSharp.fixed} alt={altText} />
      </Grid>
    );
  };
  return GridImageItem;
};
