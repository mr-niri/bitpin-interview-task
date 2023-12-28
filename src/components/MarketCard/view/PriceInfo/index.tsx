import { Box, Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import { type FC } from "react";
import { marketsListAtom } from "store/atoms/globalAtom";
import strings from "./string.json";
import PriceInfoWrapper from "./styled";
type Props = {
  marketId: number;
  endpointMinimumPrice: string;
  endpointMaximumPrice: string;
  endpointPrice: string;
};

const PriceInfo: FC<Props> = ({
  marketId,
  endpointPrice,
  endpointMinimumPrice,
  endpointMaximumPrice
}) => {
  const marketsListInfo = useAtomValue(marketsListAtom);
  const updatedMarket = marketsListInfo.marketsList[marketId];

  return (
    <PriceInfoWrapper>
      <Box className="maximumPrice">
        <Typography variant="caption">
          {updatedMarket?.max ?? endpointMaximumPrice}
        </Typography>

        <Typography variant="caption">{strings.maximumPrice}</Typography>
      </Box>
      <Typography
        data-status={Number(updatedMarket?.change) >= 0?"positive":"negative"}
        variant="body2"
      >
        {updatedMarket?.price ?? endpointPrice}
      </Typography>

      <Box className="minimumPrice">
        <Typography variant="caption">
          {updatedMarket?.min ?? endpointMinimumPrice}
        </Typography>

        <Typography variant="caption">{strings.minimumPrice}</Typography>
      </Box>
    </PriceInfoWrapper>
  );
};

export default PriceInfo;
