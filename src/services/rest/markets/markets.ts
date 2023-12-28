import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import client from "services/client";
import type {
  AllMarketsListGetRequest,
  AllMarketsListGetResponse,
  useAllMarketsListGetOptions
} from "./markets.d";
import marketQueryKeys from './marketsQueryKeys';

const allMarketsListGetUrl = (request: AllMarketsListGetRequest) => {
  if (request.page_size === undefined || request.page === undefined)
    return `mkt/markets/`;
  return `mkt/markets/?page_size=${request.page_size}&page=${request.page}`;
};

export const AllMarketsListGetFn = async (
  request: AllMarketsListGetRequest,
  configs?: AxiosRequestConfig
) => {
  const { data } = await client<AllMarketsListGetResponse>({
    method: "GET",
    url: allMarketsListGetUrl(request),
    ...configs
  });

  return data;
};

export const useAllMarketsListGet = (
    request: AllMarketsListGetRequest,
    options?: useAllMarketsListGetOptions
  ) => {
    return useQuery(
        marketQueryKeys.allMarketsList(request),
      () => AllMarketsListGetFn(request),
      options
    );
  };
  