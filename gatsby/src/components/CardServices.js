import React from 'react';
// import { withPrefix } from "gatsby";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';

const styles = {
  cardRoot: {
    width: '331px',
    // height: '412px',
    left: '22px',
    top: '1269px',
    background: '#FFFFFF',
    boxShadow: '0px 2px 50px rgba(0, 0, 0, 0.05)',
    borderRadius: '5px',
    margin: '20px',
    overflow: 'visible'
  },
  overlappingBox: {
    zIndex: '99',
    transform: 'translate(0, -50%)',
    margin: '0 auto',
    background: '#000000',
    borderRadius: '4px',
    width: '128px',
    height: '34px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  overlappingBoxText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '16px',
    textAlign: 'center',
    letterSpacing: '0.857143px',
    color: '#FFFFFF'
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '28px',
    textAlign: 'center',
    letterSpacing: '0.6px',
    color: '#000000',
    marginBottom: '21px'
  },
  subtitle: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '21px',
    textAlign: 'center',
    letterSpacing: '1.14286px',
    color: '#000000'
  },
  cardHeader: {
    padding: '30px'
  },
  cardMedia: {}
};

const CardServices = props => {
  const { classes, imageURL, overlappingBoxText, title, subtitle } = props;
  return (
    <Card className={classes.cardRoot}>
      <Card className={classes.overlappingBox}>
        <Typography classes={{ root: classes.overlappingBoxText }}>
          {overlappingBoxText}
        </Typography>
      </Card>
      <CardMedia
        className={classes.cardMedia}
        component="img"
        alt={title}
        height={'auto'}
        // src={withPrefix(imgURL)}
        src={imageURL}
        title={title}
      />
      <CardContent classes={{ root: classes.cardHeader }}>
        <Typography classes={{ root: classes.title }} component="h1">
          {title}
        </Typography>
        <Typography classes={{ root: classes.subtitle }} component="h1">
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(CardServices);
