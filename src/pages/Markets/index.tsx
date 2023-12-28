import InfiniteList from "components/InfiniteList";
import MarketCard from "components/MarketCard";
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
        <MarketCard
          firstCurrency={market.currency1}
          secondCurrency={market.currency2}
          key={market.code}
          marketId={market.id}
          title={market.title}
          endpointPrice={market.price}
          titleFa={market.title_fa}
        />
      )}
      itemProps={{
        height: 90,
        margin: 8,
        styles: { backgroundColor: "transparent" }
      }}
      hasMore={true}
      loading={isLoading}
    />
  );
};

export default Markets;
