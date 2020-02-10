import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";

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
  Link
};

const MdxPage = props => {
  const classes = useStyles();

  const {
    body,
    frontmatter: { title, noContainer }
  } = props.data.mdx;

  const Content = () => (
    <MDXProvider components={components}>
      <MDXRenderer>{body}</MDXRenderer>
    </MDXProvider>
  );

  const Container = props => (
    <Paper className={classes.container}>{props.children}</Paper>
  );

  return (
    <Page>
      <SEO title={title} />
      {noContainer ? (
        <Content />
      ) : (
        <Container>
          <Content />
        </Container>
      )}
    </Page>
  );
};

export const query = graphql`
  query MdxPage($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        noContainer
      }
      body
    }
  }
`;

export default withRoot(MdxPage);
