import React from "react";
import Img from "gatsby-image";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles(
  theme => ({
    cardRoot: {
      width: "100%",
      maxWidth: "331px",
      background: "#FFFFFF",
      boxShadow: "0px 2px 50px rgba(0, 0, 0, 0.05)",
      borderRadius: "5px",
      // margin: "20px",
      overflow: "visible",
      marginLeft: "auto",
      marginRight: "auto",
      // We add 17 for the extra space taken by the overlapping box
      marginTop: 40 + 17
    },
    overlappingBox: {
      zIndex: "99",
      transform: "translate(0, -50%)",
      margin: "0 auto",
      backgroundColor: "#000000",
      borderRadius: "4px",
      width: "128px",
      height: "34px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    overlappingBoxText: {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "12px",
      lineHeight: "16px",
      textAlign: "center",
      letterSpacing: "0.857143px",
      color: "#FFFFFF"
    },
    title: {
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "28px",
      textAlign: "center",
      letterSpacing: "0.6px",
      color: "#000000",
      marginBottom: "21px"
    },
    subtitle: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "21px",
      textAlign: "center",
      letterSpacing: "1.14286px",
      color: "#000000"
    },
    cardHeader: {
      padding: "30px"
    }
  }),
  { index: 1 }
);

const ServicesCardFactory = images => {
  const ServicesCard = props => {
    const { imageURL, overlappingBoxText, title, subtitle } = props;
    const classes = useStyles();

    const image = images.find(i => i && i.relativePath === imageURL);
    if (!image) {
      return null;
    }

    return (
      <Card className={classes.cardRoot} elevation={0}>
        <Card className={classes.overlappingBox}>
          <Typography classes={{ root: classes.overlappingBoxText }}>
            {overlappingBoxText}
          </Typography>
        </Card>
        <CardMedia
          className={classes.cardMedia}
          component={() => <Img fixed={image.childImageSharp.fixed} />}
          alt={title}
          // height={"auto"}
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
  return ServicesCard;
};

export default ServicesCardFactory;
