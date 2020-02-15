import withRoot from "../utils/withRoot";
import React from "react";
import Page from "../components/Page";

class NotFoundPage extends React.Component {
  render() {
    return (
      <Page title="Not Found">
        <p>Yikes! this page that doesn't exist... yet :)</p>
      </Page>
    );
  }
}

export default withRoot(NotFoundPage);
