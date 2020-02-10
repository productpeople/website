import React, { Component } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
	typography: {
		h2: {
			fontSize: "1.5rem",
			fontFamily: "Red Hat Display",
			fontStyle: "normal",
			fontWeight: "bold",
			lineHeight: "32px",
			textAlign: "center",
			letterSpacing: "1px",
		},
	},
});

export default function CustomTheme(children) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
