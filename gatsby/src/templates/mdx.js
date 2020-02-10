import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

import { title } from "../../config";
import withRoot from "../utils/withRoot";
import SEO from "../components/SEO";
import Page from "../components/Page";

const useStyles = makeStyles(theme => ({
  cardMedia: {
    height: "200px"
  }
}));

const components = {
  Link
};

const MdxPage = props => {
  const classes = useStyles();

  const { body } = props.data.mdx;

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
