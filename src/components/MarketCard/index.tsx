import { Box, Typography } from "@mui/material";
import { FC } from "react";
import type { Currency } from "services/rest/markets/markets.d";

import MarketCardWrapper from "./sytled";
import PriceInfo from "./view/PriceInfo";

type Props = {
  marketId: number;
  title: string;
  endpointPrice: string;
  titleFa: string;
  firstCurrency: Currency;
  secondCurrency: Currency;
  endpointMinimumPrice: string;
  endpointMaximumPrice: string;
};

const MarketCard: FC<Props> = ({
  endpointPrice,
  marketId,
  titleFa,
  firstCurrency,
  secondCurrency,
  endpointMinimumPrice,
  endpointMaximumPrice
}) => {
  return (
    <MarketCardWrapper>
      <Box className="currencyInformation">
        <Typography>{`${titleFa} `}</Typography>

        <Box className="images">
          <img src={firstCurrency.image} alt={firstCurrency.title_fa} />
          <img src={secondCurrency.image} alt={secondCurrency.title_fa} />
        </Box>
      </Box>

      <PriceInfo
        endpointMinimumPrice={endpointMinimumPrice}
        endpointMaximumPrice={endpointMaximumPrice}
        endpointPrice={endpointPrice}
        marketId={marketId}
      />
    </MarketCardWrapper>
  );
};

export default MarketCard;
