/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';


// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  typography: {
      // Use the system font over Roboto.
      fontFamily: 'Montserrat, sans-serif',
      fontWeightMedium: 500,
      fontSize: 10,
      body1: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 300,
        lineHeight: 1.7,
        fontSize: 14,
      },
      display2: {
        fontFamily: 'Crimson Text, serif',
        color: 'black',
        fontSize: 36,
      },
      display1: {
        fontFamily: 'Crimson Text, serif',
        color: '#848484',
        fontSize: 36,
      },
      title: {
        fontSize: 12,
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 600,
        letterSpacing:'1.8px',
        textTransform:'uppercase'
      },
      headline: {
        fontFamily: 'Crimson Text, serif',
        fontWeight: 400,
        fontSize: 26,
      },
    },
    overrides: {
      MuiButton: {
        // Name of the styleSheet
        root: {
          // Name of the rule
          borderRadius: 3,
          border: 0,
          height: 48,
          padding: '0px',

          '&:hover': {
            textDecoration: 'none',
            // Reset on mouse devices
            backgroundColor: 'none',
          },
        },
    },
  },
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
