import React from "react";
import { create } from "jss";
import rtl from "jss-rtl";
import i18n from "./i18n";

import {
  ThemeProvider,
  StylesProvider,
  createTheme,
  jssPreset,
} from "@material-ui/core";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function withRoot(Component) {
  function WithRoot(props) {
    // JssProvider allows customizing the JSS styling solution.
    return (
      <StylesProvider jss={jss}>
        <ThemeProvider
          theme={createTheme({
            direction: i18n.dir(),
          })}
        >
          <Component {...props} />
        </ThemeProvider>
      </StylesProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
