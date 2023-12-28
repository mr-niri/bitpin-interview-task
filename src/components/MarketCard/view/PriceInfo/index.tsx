import { type FC } from "react";
import PriceInfoWrapper from "./styled";

type Props = {
  price: string;
};

const PriceInfo: FC<Props> = ({ price }) => {
  return <PriceInfoWrapper>{price}</PriceInfoWrapper>;
};

export default PriceInfo;
