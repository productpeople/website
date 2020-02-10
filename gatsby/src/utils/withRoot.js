// See https://github.com/mui-org/material-ui/tree/master/examples/gatsby
import "./installMuiStyles";
import React from "react";
import { StylesProvider, ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import getPageContext from "./getPageContext";
import Hidden from "@material-ui/core/Hidden";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["'Red Hat Display'", "sans-serif"].join(","),
    h1: { fontWeight: 900 },
    h2: { fontWeight: 900 }
  }
});

function withRoot(Component) {
  class WithRoot extends React.Component {
    constructor(props) {
      super(props);
      this.muiPageContext = getPageContext();
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      return (
        <StylesProvider
          generateClassName={this.muiPageContext.generateClassName}
          sheetsManager={this.muiPageContext.sheetsManager}
        >
          {/* ThemeProvider makes the theme available down the React
          tree thanks to React context. */}
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Hidden implementation="css">
              <Component {...this.props} />
            </Hidden>
          </ThemeProvider>
        </StylesProvider>
      );
    }
  }

  return WithRoot;
}

export default withRoot;
