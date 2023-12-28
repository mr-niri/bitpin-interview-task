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
        html{
          height: 100vh;
          width: 100vw;
          
        }
        body , #root{
          height: 100%;
          width: 100%;
        }

        #root{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `
};

export default MuiCssBaseline;
