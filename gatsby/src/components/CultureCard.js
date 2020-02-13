import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles(
  theme => ({
    cardRoot: {
      width: "100%",
      maxWidth: "331px",
      height: "412px",
      background: "#FFFFFF",
      boxShadow: "0px 2px 50px rgba(0, 0, 0, 0.05)",
      borderRadius: "5px",
      margin: "20px",
      overflow: "visible",
      display: "flex",
      textAlign: "center"
    },
    cardMedia: {
      height: 33,
      width: 35,
      margin: "0 auto"
    },
    cardContent: {
      height: "100%",
      width: "100%",
      padding: "36px 72px"
    },
    title: {
      fontFamily: theme.typography.fontFamily,
      fontWeight: 700,
      fontSize: 24,
      lineHeight: "32px",
      letterSpacing: 1,
      marginTop: 24
    },
    listElement: {
      marginTop: "32px"
    },
    listItem: {
      padding: 0,
      textAlign: "center"
    },
    listItemText: {
      fontSize: "18px",
      lineHeight: "32px",
      padding: 0
    }
  }),
  { index: 1 }
);

const CultureCard = props => {
  const { children, imageURL, altText } = props;
  const classes = useStyles();
  return (
    <Card classes={{ root: classes.cardRoot }} elevation={0}>
      <CardContent classes={{ root: classes.cardContent }}>
        <CardMedia
          className={classes.cardMedia}
          component="img"
          alt={altText}
          src={imageURL}
        />
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
        disableTypography
      />
    </ListItem>
  );
};

export default CultureCard;
