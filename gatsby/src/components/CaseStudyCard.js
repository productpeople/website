import React from "react";
import Img from "gatsby-image";
// import { withPrefix } from "gatsby";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(
  theme => ({
    root: {
      borderRadius: "6px 6px 6px 6px",
      width: "100%",
      maxWidth: "331px",
      // margin: "20px"
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 40
    },
    cardHeader: {
      height: "100px",
      background: "#000000",
      color: "#FFFFFF",
      textAlign: "center",
      padding: "19px"
    },
    cardTitle: {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "24px",
      lineHeight: "32px",
      textAlign: "center",
      letterSpacing: "1px",
      color: "#FFFFFF"
    },
    cardSubtitle: {
      fontFamily: theme.monoFont,
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "32px",
      textAlign: "center",
      letterSpacing: "0.5px",
      color: "#FFFFFF"
    },
    cardMedia: {
      objectFit: "cover"
    }
  }),
  { index: 1 }
);

const CaseStudyCardFactory = images => {
  const CaseStudyCard = props => {
    const { title, imgHeight, imgURL, subtitle } = props;
    const classes = useStyles();

    const image = images.find(i => i && i.relativePath === imgURL);
    if (!image) {
      return null;
    }

    return (
      <Card className={classes.root} elevation={0}>
        <CardActionArea>
          <CardMedia
            className={classes.cardMedia}
            component={() => <Img fixed={image.childImageSharp.fixed} />}
            alt={title}
            height={imgHeight}
            // src={withPrefix(imgURL)}
            src={imgURL}
            title={title}
          />
          <CardContent className={classes.cardHeader}>
            <Typography classes={{ root: classes.cardTitle }} component="h2">
              {title}
            </Typography>
            <Typography classes={{ root: classes.cardSubtitle }} component="h3">
              {subtitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };
  return CaseStudyCard;
};

export default CaseStudyCardFactory;
