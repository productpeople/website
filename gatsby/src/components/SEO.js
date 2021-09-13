import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const SEO = props => (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      const title = props.title || data.site.siteMetadata.title;
      const description = props.description || data.site.siteMetadata.description;
      return (
        <Helmet
          htmlAttributes={{
            lang: "en",
          }}
          title={title}
        >
          <meta name="description" content={description} />
          {props.children}
        </Helmet>
      );
    }}
  />
);

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`;
