import _ from "lodash";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import type { Theme as MuiTheme } from "@material-ui/core/styles/createMuiTheme";
import type { Shadows as MuiShadows } from "@material-ui/core/styles/shadows";
import type {
  Palette as MuiPalette,
  TypeBackground as MuiTypeBackground,
} from "@material-ui/core/styles/createPalette";
import typography from "./typography";

interface TypeBackground extends MuiTypeBackground {
  dark: string;
}

interface Palette extends MuiPalette {
  background: TypeBackground;
}

export interface Theme extends MuiTheme {
  name: string;
  palette: Palette;
}

type Direction = "ltr" | "rtl";

interface ThemeConfig {
  direction?: Direction;
  responsiveFontSizes?: boolean;
  theme?: string;
}

interface ThemeOptions {
  name?: string;
  direction?: Direction;
  typography?: Record<string, any>;
  overrides?: Record<string, any>;
  palette?: Record<string, any>;
  shadows?: MuiShadows;
}

const baseOptions: ThemeOptions = {
  direction: "ltr",
  typography,
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: "hidden",
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: "rgba(0,0,0,0.075)",
      },
    },
  },
};

export const createTheme = (config: ThemeConfig = {}): Theme => {
  let theme = createMuiTheme(
    _.merge({}, baseOptions, { direction: config.direction })
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme as Theme;
};
