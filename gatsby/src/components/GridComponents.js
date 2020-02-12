import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/styles/withStyles';

const styles = {
  root: {
    maxWidth: '750px'
  },
  image: {
    width: '100%',
    margin: 'auto',
    padding: '40px 25px',
    filter: 'grayscale(1)',
    opacity: 0.5
  },
  grid: {
    display: 'flex',
    alignItems: 'center'
  }
};

export const GridContainer = withStyles(styles)(props => {
  const { classes, children } = props;
  console.log(children);
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        {children}
      </Grid>
    </div>
  );
});

export const GridItemImage = withStyles(styles)(props => {
  const { classes, imageURL, altText } = props;
  return (
    <Grid className={classes.grid} item xs={6} sm={4}>
      <img className={classes.image} src={imageURL} alt={altText} />
    </Grid>
  );
});
