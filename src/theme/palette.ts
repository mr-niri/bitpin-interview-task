import type { SimplePaletteColorOptions, ThemeOptions } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    carbon: true;
  }
}

type AlphaColor = {
  heavyLight: string;
  light: string;
  medium: string;
  high: string;
};
type ConstantColor = {
  main: string;
  medium: string;
  light: string;
};
declare module "@mui/material/styles" {
  interface Palette {
    surface: SimplePaletteColorOptions;
    surfaceAlpha: AlphaColor;
    carbon: SimplePaletteColorOptions;
    carbonAlpha: AlphaColor;
    alert: SimplePaletteColorOptions;
    alertAlpha: AlphaColor;
    attention: SimplePaletteColorOptions;
    attentionAlpha: AlphaColor;
    primaryAlpha: AlphaColor;
    secondaryAlpha: AlphaColor;
    successAlpha: AlphaColor;
    infoAlpha: AlphaColor;
    inactiveLight: string;
    inactiveDark: string;
    constantBlack: ConstantColor;
    constantWhite: ConstantColor;
    notifyBadge: string;
    backgroundGrey: string;
    gold: string;
    silver: string;
    bronze: string;
  }

  interface PaletteOptions {
    surface: SimplePaletteColorOptions;
    surfaceAlpha: AlphaColor;
    carbon: SimplePaletteColorOptions;
    carbonAlpha: AlphaColor;
    alert: SimplePaletteColorOptions;
    alertAlpha: AlphaColor;
    attention: SimplePaletteColorOptions;
    attentionAlpha: AlphaColor;
    primaryAlpha: AlphaColor;
    secondaryAlpha: AlphaColor;
    successAlpha: AlphaColor;
    infoAlpha: AlphaColor;
    inactiveLight: string;
    inactiveDark: string;
    constantBlack: ConstantColor;
    constantWhite: ConstantColor;
    notifyBadge: string;
    backgroundGrey: string;
    gold: string;
    silver: string;
    bronze: string;
  }
}

const palette: ThemeOptions["palette"] = {
  surface: {
    light: "#FFFFFF",
    main: "#F9FAFB",
    dark: "#F2F4F5"
  },
  surfaceAlpha: {
    heavyLight: "#F9FAFB0A",
    light: "#F9FAFB0F",
    medium: "#F9FAFB1F",
    high: "#F9FAFB3D"
  },
  carbon: {
    light: "#797C83",
    main: "#3A3D42",
    dark: "#181B1F"
  },
  carbonAlpha: {
    heavyLight: "#3A3D420A",
    high: "#181C203D",
    medium: "#3A3D421F",
    light: "#3A3D420F"
  },
  primary: {
    light: "#FF66BF",
    main: "#E20074",
    dark: "#BC0060"
  },
  primaryAlpha: {
    heavyLight: "#E200740A",
    high: "#E200743D",
    medium: "#E200741F",
    light: "#E200740F"
  },
  secondary: {
    light: "#A0A7FF",
    main: "#575EFF",
    dark: "#1927BC"
  },
  secondaryAlpha: {
    heavyLight: "#575EFF0A",
    high: "#575EFF3D",
    medium: "#575EFF1F",
    light: "#575EFF0F"
  },
  success: {
    light: "#1CEB8B",
    main: "#00D170",
    dark: "#22A958"
  },
  successAlpha: {
    heavyLight: "#00D1700A",
    high: "#00D1703D",
    medium: "#00D1701F",
    light: "#00D1700F"
  },
  info: {
    light: "#2C84DF",
    main: "#006AD7",
    dark: "#005CBB"
  },
  infoAlpha: {
    heavyLight: "#006AD70A",
    high: "#006AD73D",
    medium: "#006AD71F",
    light: "#006AD70F"
  },
  alert: {
    light: "#E0484D",
    main: "#BD272D",
    dark: "#A60006"
  },
  alertAlpha: {
    heavyLight: "#CC1D2B0A",
    high: "#006AD73D",
    medium: "#CC1D2B1F",
    light: "#CC1D2B0F"
  },
  attention: {
    light: "#EBC247",
    main: "#E0A906",
    dark: "#CC8800"
  },
  attentionAlpha: {
    heavyLight: "#E5B85C0A",
    high: "#E5B85C3D",
    medium: "#E5B85C1F",
    light: "#E5B85C0F"
  },
  error: {
    light: "#E0484D",
    main: "#BD272D",
    dark: "#A60006"
  },
  warning: {
    light: "#EBC247",
    main: "#E0A906",
    dark: "#CC8800"
  },
  inactiveLight: "#D2D4D6",
  inactiveDark: "#9C9FA3",
  constantBlack: { main: "#000000", medium: "#0000003D", light: "#0000000F" },
  constantWhite: { main: "#FFFFFF", medium: "#FFFFFF14", light: "#FFFFFF52" },
  notifyBadge: "#F0543C",
  backgroundGrey: "#F8F9FB",
  gold: "#E6D100",
  silver: "#A3A5A8",
  bronze: "#CD7F32"
};

export default palette;
