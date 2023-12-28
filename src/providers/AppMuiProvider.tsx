import { CssBaseline, ThemeProvider } from "@mui/material";
import type { FC, PropsWithChildren } from "react";
import theme from "theme";

type Props = PropsWithChildren;

const AppMuiProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppMuiProvider;
