import type { AllMarketsListGetRequest } from "./markets.d";

const marketQueryKeys = {
  all: ["markets"] as const,
  allMarketsList: (request: AllMarketsListGetRequest) =>
    ["markets", "list", request] as const
};

export default marketQueryKeys;
