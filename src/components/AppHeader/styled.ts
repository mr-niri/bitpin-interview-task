import { styled } from "@mui/material";

const AppHeaderWrapper = styled("header")(({ theme }) => ({
  height: theme.spacing(8),
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(0, 2),
  color: theme.palette.common.white,
  "&> p": {
    flex: 1,
    textAlign: "center"
  }
}));

export default AppHeaderWrapper;
