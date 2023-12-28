import { styled } from "@mui/material";

const AppHeaderWrapper = styled("header")(({ theme }) => ({
  height: theme.spacing(8),
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: theme.spacing(0, 2),
  color: theme.palette.common.white
}));

export default AppHeaderWrapper;
