import InfiniteList from "components/InfiniteList";
import MarketCard from "components/MarketCard";
import { FC } from "react";
import { useAllMarketsListGet } from "services/rest/markets/markets";
import type { Market } from "services/rest/markets/markets.d";

const Markets: FC = () => {
  const { data, isLoading } = useAllMarketsListGet({});

  const onNextPageHandler=()=>{
    // I tried to load your endpoint with page_size and page but it didn't work .
    // As my InfiniteList component support nextPage handler, I wrote this handler for you.
    console.log('Next Page ...')
  }
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
          title={market.title}
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
