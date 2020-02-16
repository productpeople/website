// NOTE: This must be the first import
import withRoot from "../utils/withRoot";
import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { maxWidth } from "../../config";
import SEO from "../components/SEO";
import Page from "../components/Page";
import ButtonBig from "../components/ButtonBig";
import ServicesCardFactory from "../components/ServicesCard";
import CaseStudyCardFactory from "../components/CaseStudyCard";
import CultureCard, {
  CultureCardTitle,
  CultureCardList,
  CultureCardListItem
} from "../components/CultureCard";
import {
  GridContainer,
  GridItemImageFactory
} from "../components/GridComponents";
import TextSectionSmallTitle from "../components/TextSectionSmallTitle";
import TopSection from "../components/TopSection";

const useStyles = makeStyles(
  theme => ({
    container: {
      maxWidth,
      padding: theme.spacing.unit * 2,
      marginLeft: "auto",
      marginRight: "auto"
    },
    cardMedia: {
      height: "200px"
    }
  }),
  { index: 1 }
);

const baseComponents = {
  Paper,
  Grid,
  Typography,
  Link,
  ButtonBig,
  CultureCard,
  CultureCardTitle,
  CultureCardList,
  CultureCardListItem,
  GridContainer,
  TextSectionSmallTitle,
  TopSection
};

const MdxPage = props => {
  const classes = useStyles();

  const {
    body,
    frontmatter: { title, images_331, images_185 }
  } = props.data.mdx;

  const components = {
    ...baseComponents,
    ServicesCard: ServicesCardFactory(images_331),
    CaseStudyCard: CaseStudyCardFactory(images_331),
    GridItemImage: GridItemImageFactory(images_185)
  };

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
        images_331 {
          relativePath
          childImageSharp {
            fixed(width: 331) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        images_185 {
          relativePath
          childImageSharp {
            fluid(maxWidth: 185) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`;

export default withRoot(MdxPage);
