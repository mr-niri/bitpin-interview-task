import { Box, Typography } from "@mui/material";
import InfiniteList from "components/InfiniteList";
import { FC } from "react";
import { useAllMarketsListGet } from "services/rest/markets/markets";
import type { Market } from "services/rest/markets/markets.d";

const Markets: FC = () => {
  const { data, isLoading } = useAllMarketsListGet({});
  
  return (
    <InfiniteList<Market & { index: number }>
      items={(data?.results ?? []).map((item, i) => ({
        ...item,
        index: i
      }))}
      loadMoreItems={() => console.log("ss")}
      itemRenderer={(market: Market) => (
        <Box>
          <Typography>{`${market.title} `}</Typography>

        </Box>
      )}
      itemProps={{
        height: 84,
        margin: 10,
        styles: { backgroundColor: "transparent" }
      }}
      hasMore={true}
      loading={isLoading}
    />
  );
};

export default Markets;
