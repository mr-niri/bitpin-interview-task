import { styled } from "@mui/material";

const MainHolder = styled("main")(({ theme }) => ({
  backgroundColor: theme.palette.backgroundGrey,
  flex: 1,
  maxWidth: theme.spacing(70),
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}));

export default MainHolder;
