import React from 'react';
import Card from '@material-ui/core/Card';
import ButtonBig from './ButtonBig';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';

const styles = theme => ({
  root: {
    // width: '100%',
    // height: '100%'
  },
  cardRoot: {
    padding: '140px 0px'
  },
  cardContent: {
    margin: 'auto'
  },
  title: {
    margin: '0 auto',
    textAlign: 'center',
    maxWidth: '700px',
    fontWeight: 700,
    fontSize: '56px',
    lineHeight: '70px',
    [theme.breakpoints.down('xs')]: {
      fontWeight: 700,
      fontSize: '30px',
      lineHeight: '40px',
      marginBottom: '72px'
    }
  }
});

const TopSection = props => {
  const { classes, titleText, buttonText } = props;
  return (
    <div className={classes.root}>
      <Card className={classes.cardRoot}>
        <CardContent className={classes.cardContent}>
          <Typography classes={{ root: classes.title }} component="h1">
            {titleText}
          </Typography>
          <ButtonBig className={classes.button} text={buttonText} />
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)(TopSection);
