import { Box, Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import { FC } from "react";
import type { Currency } from "services/rest/markets/markets.d";
import { marketsListAtom } from "store/atoms/globalAtom";
import MarketCardWrapper from "./sytled";

type Props = {
  marketId: number;
  title: string;
  endpointPrice: string;
  titleFa: string;
  firstCurrency: Currency;
  secondCurrency: Currency;
};

const MarketCard: FC<Props> = ({
  endpointPrice,
  marketId,
  titleFa,
  firstCurrency,
  secondCurrency
}) => {
  const marketsListInfo = useAtomValue(marketsListAtom);
  const updatedMarket = marketsListInfo.marketsList[marketId];
  return (
    <MarketCardWrapper>
      <Box className="currencyInformation">
        <Typography>{`${titleFa} `}</Typography>

        <Box className="images">
          <img src={firstCurrency.image} alt={firstCurrency.title_fa} />
          <img src={secondCurrency.image} alt={secondCurrency.title_fa} />
        </Box>
      </Box>
      <Typography data-price-change={"s"}>{`${
        updatedMarket?.price ?? endpointPrice
      }`}</Typography>
    </MarketCardWrapper>
  );
};

export default MarketCard;
