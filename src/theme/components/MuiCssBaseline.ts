import type { Components } from "@mui/material";

const MuiCssBaseline: Components["MuiCssBaseline"] = {
  styleOverrides: `
        @font-face {
          font-family: 'iransansx';
          font-style: normal;
          font-display: swap;
          font-weight: normal;
          src: url(/assets/fonts/iransansx/woff2/IRANSansXFaNum-Regular.woff2) format('woff2');
        }
      `
};

export default MuiCssBaseline;
