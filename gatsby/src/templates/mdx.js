import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import withRoot from "../utils/withRoot";
import SEO from "../components/SEO";
import Page from "../components/Page";

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardMedia: {
    height: "200px"
  }
}));

const components = {
  Grid,
  Link
};

const MdxPage = props => {
  const classes = useStyles();

  const {
    body,
    frontmatter: { title, noContainer }
  } = props.data.mdx;

  return (
    <Page>
      <SEO title={title} />
      <MDXProvider components={components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
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
