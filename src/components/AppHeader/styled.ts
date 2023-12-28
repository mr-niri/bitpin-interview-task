import { styled } from "@mui/material";

const AppHeaderWrapper = styled("header")(({ theme }) => ({
  height: theme.spacing(8),
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(0, 2),
  color: theme.palette.common.white,
  "&> p": {
    textAlign: "center"
  },
  "&> span":{
    width:"100%",
  }
}));

export default AppHeaderWrapper;
