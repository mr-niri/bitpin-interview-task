import { styled } from "@mui/material";
import Box from "@mui/material/Box";

const PageLoadingWrapper = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100vw",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "& .MuiCircularProgress-root": {
    color: theme.palette.inactiveLight
  }
}));

export default PageLoadingWrapper;
