import { atomWithReset } from "jotai/utils";
import type { MarketPriceInfo } from "services/rest/markets/markets.d";

type SocketStatusAtom = {
  status: "Connected" | "Disconnected" | "Connecting" | "Error";
  message?: string;
};

export const socketStatusAtom = atomWithReset<SocketStatusAtom>({
  status: "Disconnected"
});

type MarketsAtom = {
  marketsList: { [key: number]: MarketPriceInfo };
};

export const marketsListAtom = atomWithReset<MarketsAtom>({
  marketsList: {}
});
