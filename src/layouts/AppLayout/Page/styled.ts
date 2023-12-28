import { styled } from "@mui/material";

const MainHolder = styled("main")(({ theme }) => ({
  backgroundColor: theme.palette.backgroundGrey,
  flex: 1,
  maxWidth: theme.spacing(70),
  width: "100%",
}));

export default MainHolder;
