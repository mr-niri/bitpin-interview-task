import { Box, styled } from "@mui/material";

const InfiniteListWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  position: "relative",
  flex: 1,
  overflowY: "auto",
  flexWrap: "wrap",

  "& .MuiCircularProgress-root": {
    color: theme.palette.inactiveLight
  },

  "&> .extraBox": {
    position: "absolute"
  },

  "&> .itemHolder": {
    width: "100%",
    position: "absolute"
  }
}));

export default InfiniteListWrapper;
