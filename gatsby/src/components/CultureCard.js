import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(
  theme => ({
    cardRoot: {
      width: "331px",
      height: "412px",
      background: "#FFFFFF",
      boxShadow: "0px 2px 50px rgba(0, 0, 0, 0.05)",
      borderRadius: "5px",
      margin: "20px",
      overflow: "visible",
      display: "flex",
      textAlign: "center"
    },
    cardContent: {
      height: "100%",
      width: "100%",
      padding: "36px 72px"
    },
    title: {
      fontFamily: theme.typography.fontFamily,
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "1px",
      marginTop: "30px"
    },
    listElement: {
      marginTop: "32px"
    },
    listItem: {
      padding: 0,
      textAlign: "center"
    },
    listItemText: {
      fontSize: "18px !important",
      lineHeight: "32px !important",
      padding: 0
    }
  }),
  { index: 1 }
);

const CultureCard = props => {
  const { children } = props;
  const classes = useStyles();
  return (
    <Card className={classes.cardRoot}>
      <CardContent classes={{ root: classes.cardContent }}>
        {children}
      </CardContent>
    </Card>
  );
};

export const CultureCardTitle = props => {
  const { children } = props;
  const classes = useStyles();
  return (
    <Typography classes={{ root: classes.title }} component="h1">
      {children}
    </Typography>
  );
};

export const CultureCardList = props => {
  const classes = useStyles();
  return <List className={classes.listElement}>{props.children}</List>;
};

export const CultureCardListItem = props => {
  const { children } = props;
  const classes = useStyles();
  return (
    <ListItem className={classes.listItem}>
      <ListItemText
        classes={{ root: classes.listItemText }}
        primary={children}
      />
    </ListItem>
  );
};

export default CultureCard;
