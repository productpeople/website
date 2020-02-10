const path = require("path"),
  fs = require("fs");

// Create pages from markdown files.
exports.createPages = ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const mdxTemplate = path.resolve(`src/templates/mdx.js`);

  return graphql(
    `
      query {
        allMdx {
          edges {
            node {
              id
              frontmatter {
                path
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      reporter.panicOnBuild("Failed to load mdx query", result.errors);
    }

    console.log("result.data", result.data);

    const pages = result.data.allMdx.edges;

    pages.forEach(edge => {
      const {
        id,
        frontmatter: { path }
      } = edge.node;
      createPage({
        component: mdxTemplate,
        path,
        context: { id }
      });
    });
  });
};
