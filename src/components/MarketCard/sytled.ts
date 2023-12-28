import { Box, styled } from "@mui/material";

const MarketCardWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  flex: 1,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.common.white,
  margin: theme.spacing(1),
  direction: "rtl",
  "&> .currencyInformation": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    "&> .images": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginRight: theme.spacing(1),

      "&> img": {
        width: theme.spacing(2),
        height: theme.spacing(2),
        borderRadius: "50%",
        backgroundColor: theme.palette.grey[300],
        zIndex: 2,
        "&:last-child": {
          marginRight: theme.spacing(-1),
          zIndex: 1
        }
      }
    }
  }
}));

export default MarketCardWrapper;
