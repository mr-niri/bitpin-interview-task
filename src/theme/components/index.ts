import type { ThemeOptions } from "@mui/material";
import MuiCssBaseline from "theme/components/MuiCssBaseline";

const components: ThemeOptions["components"] = {
  MuiCssBaseline,
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
      disableTouchRipple: true
    }
  }
};

export default components;
