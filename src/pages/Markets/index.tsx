import InfiniteList from "components/InfiniteList";
import MarketCard from "components/MarketCard";
import { type FC } from "react";
import { useAllMarketsListGet } from "services/rest/markets/markets";
import type { Market } from "services/rest/markets/markets.d";

const Markets: FC = () => {
  const { data, isLoading } = useAllMarketsListGet({});

  const onNextPageHandler = () => {
    // Typically, when handling lengthy lists and paginated APIs, this method loads the next page's data
    // when the user reaches the end of the list. However, due to issues with the API's pagination, where passing
    // page and page_size doesn't function as expected, this function remains inactive.
    console.log("Next Page ...");
  };

  // Employing a virtual list mechanism here, rendering only the list items visible to the user during scroll,
  // ensures smooth handling of large lists without causing lags or impacting the user's computer performance.
  // This approach also prevents unnecessary re-renders, especially crucial when receiving price updates via WebSocket.
  return (
    <InfiniteList<Market & { index: number }>
      items={(data?.results ?? []).map((item, i) => ({
        ...item,
        index: i
      }))}
      loadMoreItems={onNextPageHandler}
      itemRenderer={(market: Market) => (
        <MarketCard
          firstCurrency={market.currency1}
          secondCurrency={market.currency2}
          key={market.code}
          marketId={market.id}
          endpointPrice={market.price}
          titleFa={market.title_fa}
          endpointMaximumPrice={market.price_info.max}
          endpointMinimumPrice={market.price_info.min}
        />
      )}
      itemProps={{
        height: 110,
        margin: 8,
        styles: { backgroundColor: "transparent" }
      }}
      hasMore={true}
      loading={isLoading}
    />
  );
};

export default Markets;
