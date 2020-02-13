// See https://github.com/mui-org/material-ui/tree/master/examples/gatsby
// NOTE: This must be the first import
import "./installMuiStyles";
import React from "react";
import { StylesProvider, ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import getPageContext from "./getPageContext";
import Hidden from "@material-ui/core/Hidden";
import { createMuiTheme } from "@material-ui/core";
import Particles from "react-particles-js";

import particlesConfig from "../particlesjs-config.json";

const theme = createMuiTheme({
  monoFont: "'Roboto Mono',monospace",
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
            <Particles style={styles.particles} params={particlesConfig} />
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

const styles = {
  particles: {
    zIndex: -10,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh"
  }
};
