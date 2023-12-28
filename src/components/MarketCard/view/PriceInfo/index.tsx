import { useAtomValue } from "jotai";
import { type FC } from "react";
import { marketsListAtom } from "store/atoms/globalAtom";
import PriceInfoWrapper from "./styled";

type Props = {
  marketId: number;
  endpointPrice: string;
};

const PriceInfo: FC<Props> = ({ marketId, endpointPrice }) => {
  const marketsListInfo = useAtomValue(marketsListAtom);
  const updatedMarket = marketsListInfo.marketsList[marketId];

  return (
    <PriceInfoWrapper>{updatedMarket?.price ?? endpointPrice}</PriceInfoWrapper>
  );
};

export default PriceInfo;
