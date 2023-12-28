import type { ThemeOptions } from "@mui/material";

const typography: ThemeOptions["typography"] = {
  allVariants: { fontFamily: "iransansx, sans-serif" },
  h3: {
    fontSize: "48px",
    fontWeight: 400,
    lineHeight: "64px"
  },
  h4: {
    fontSize: "34px",
    fontWeight: 400,
    lineHeight: "40px"
  },
  h5: {
    fontSize: "24px",
    fontWeight: 400,
    lineHeight: "32px"
  },
  h6: {
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "28px"
  },
  subtitle1: {
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "28px"
  },
  subtitle2: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px"
  },
  body1: {
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "29px"
  },
  body2: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px"
  },
  button: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "normal"
  },
  caption: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px"
  },
  overline: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "16px",
    letterSpacing: "0px"
  }
};

export default typography;
