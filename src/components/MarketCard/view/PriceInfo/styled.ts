import { Box, styled } from "@mui/material";

const PriceInfoWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: theme.spacing(1),
  "&>.minimumPrice,.maximumPrice ": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.grey[500]
  },
  "&> p":{
    color:theme.palette.common.black
  },
  "&> p[data-status='positive']": {
    color: theme.palette.success.main,

  },
  "&> p[data-status='negative']": {
    color: theme.palette.error.main,

  },

}));

export default PriceInfoWrapper;
