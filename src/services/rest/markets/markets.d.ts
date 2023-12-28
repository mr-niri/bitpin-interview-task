import { type UseQueryOptions } from "@tanstack/react-query";
import { type DefaultPaginatedResponse } from "services/rest/defaultResponse.d";
import marketQueryKeys from './marketsQueryKeys';
export type Currency = {
  id: number;
  title: string;
  title_fa: string;
  code: string;
  image: string;
  decimal: number;
  decimal_amount: string;
  decimal_irt: string;
  color: string;
};
export type MarketPriceInfo = {
  created_at: number;
  price: string;
  change: string;
  min: string;
  max: string;
};
export type Market = {
  id: number;
  currency1: Currency;
  currency2: Currency;
  price_info: MarketPriceInfo;
  price: string;
  title: string;
  code: string;
  title_fa: string;
};

export type AllMarketsListGetResponse = DefaultPaginatedResponse<Market>;

export type AllMarketsListGetRequest = {
  page?: number;
  page_size?: number;
};

export type useAllMarketsListGetOptions = Omit<
  UseQueryOptions<
  AllMarketsListGetResponse,
    unknown,
    AllMarketsListGetResponse,
    ReturnType<typeof marketQueryKeys.allMarketsList>
  >,
  "queryKey" | "queryFn"
>;