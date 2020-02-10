import React from "react";
// import { withPrefix } from "gatsby";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";

const styles = {
  card: {
    width: "331px",
    height: "412px",
    left: "22px",
    top: "1269px",
    background: "#FFFFFF",
    boxShadow: "0px 2px 50px rgba(0, 0, 0, 0.05)",
    borderRadius: "5px",
    margin: "20px",
    overflow: "visible"
  },
  deliveryTimeBox: {
    zIndex: "99",
    transform: "translate(0, -50%)",
    margin: "0 auto",
    background: "#000000 !important",
    borderRadius: "4px",
    width: "128px",
    height: "34px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  deliveryTimeBoxText: {
    fontFamily: "Red Hat Display",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "16px",
    textAlign: "center",
    letterSpacing: "0.857143px",
    color: "#FFFFFF !important"
  },
  title: {
    fontFamily: "Red Hat Display",
    fontStyle: "normal !important",
    fontWeight: "900 !important",
    fontSize: "24px !important",
    lineHeight: "28px !important",
    textAlign: "center",
    letterSpacing: "0.6px !important",
    color: "#000000 !important",
    marginBottom: "21px !important"
  },
  subtitle: {
    fontFamily: "Red Hat Display",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "21px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "1.14286px",
    color: "#000000"
    // marginBottom: "31px !important",
  },
  cardHeader: {
    paddingBottom: "31px !important",
    clear: "both"
  }
};

const CardServices = ({ classes, item = {} }) => {
  return (
    <Card className={classes.card}>
      <Card className={classes.deliveryTimeBox}>
        <Typography classes={{ root: classes.deliveryTimeBoxText }}>
          {item.deliveryTimeBox.text}
        </Typography>
      </Card>
      <CardMedia
        className={classes.cardMedia}
        component="img"
        alt={item.title}
        height={item.image.height}
        // src={withPrefix(imgURL)}
        src={item.image.imageURL}
        title={item.title}
      />
      <CardContent classes={{ root: classes.cardHeader }}>
        <Typography classes={{ root: classes.title }} component="h1">
          {item.title}
        </Typography>
        <Typography classes={{ root: classes.subtitle }} component="h1">
          {item.subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(CardServices);
