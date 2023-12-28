import { type FC } from "react";
import ItemHolderWrapper from "./styles";

export type Props = {
  height: number;
  margin: number;
  stylesProps?: React.CSSProperties;
  index: number;
  child: JSX.Element | React.ReactNode;
};

// This component is used to wrap each item. It is used to calculate each item's top
// so we can simulate a list layout with absolute positions.
const ItemHolder: FC<Props> = ({
  height,
  margin,
  stylesProps,
  index,
  child
}) => {
  return (
    <ItemHolderWrapper
      sx={ {
        ...stylesProps,
        height,
        top: index * (height + margin) + margin
      }}
    >
      {child}
    </ItemHolderWrapper>
  );
};

export default ItemHolder;
