import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/styles/withStyles';

const styles = {
  image: {
    width: '100%',
    margin: 'auto',
    filter: 'grayscale(1)',
    opacity: 0.5
  },
  grid: {
    display: 'flex',
    alignItems: 'center'
  }
};

const GridUserLogos = props => {
  const { classes, logos } = props;
  return (
    <div className={classes.root}>
      <Grid container>
        {logos.map(logo => (
          <Grid
            className={classes.grid}
            item
            xs={6}
            sm={4}
            // justify="center"
            // alignItems="center"
          >
            <img className={classes.image} src={logo.logoURL} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(GridUserLogos);
