const config = require("./config");

module.exports = {
  pathPrefix: "/gatsby-material-ui-business-starter",
  siteMetadata: {
    title: config.title,
    description: config.description
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-stylus",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: config.maxWidth
            }
          },
          `gatsby-remark-external-links`
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/../content/`,
        name: "pages"
      }
    },
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Product People`,
        short_name: `Product People`,
        start_url: `/`,
        background_color: `#f2f2f2`,
        display: "browser",
        // theme_color: "#ffffff",
        icon: `static/images/favicon.png`
      }
    }
  ]
};
