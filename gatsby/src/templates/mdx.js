import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { maxWidth } from "../../config";
import withRoot from "../utils/withRoot";
import SEO from "../components/SEO";
import Page from "../components/Page";
import ButtonBig from "../components/ButtonBig";
import ServicesCard from "../components/ServicesCard";
import CaseStudyCard from "../components/CaseStudyCard";
import CultureCard, {
  CultureCardTitle,
  CultureCardList,
  CultureCardListItem
} from "../components/CultureCard";
import { GridContainer, GridItemImage } from "../components/GridComponents";
import TextSectionSmallTitle from "../components/TextSectionSmallTitle";
import TopSection from "../components/TopSection";

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth,
    padding: theme.spacing.unit * 2,
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardMedia: {
    height: "200px"
  }
}));

const components = {
  Paper,
  Grid,
  Typography,
  Link,
  ButtonBig,
  ServicesCard,
  CaseStudyCard,
  CultureCard,
  CultureCardTitle,
  CultureCardList,
  CultureCardListItem,
  GridContainer,
  GridItemImage,
  TextSectionSmallTitle,
  TopSection
};

const MdxPage = props => {
  const classes = useStyles();

  const {
    body,
    frontmatter: { title }
  } = props.data.mdx;

  return (
    <Page>
      <SEO title={title} />
      <div className={classes.container}>
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Page>
  );
};

export const query = graphql`
  query MdxPage($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

export default withRoot(MdxPage);
