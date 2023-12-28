import { Box, CircularProgress } from "@mui/material";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { default as InfiniteListWrapper } from "./styles";
import ItemHolder from "./views/ItemHolder";

type ItemProps = {
  height: number;
  margin: number;
  styles?: CSSProperties;
};
export type InfiniteListProps<T> = {
  items: T[];
  loadMoreItems: () => void;
  itemRenderer: (card: T) => JSX.Element;
  itemProps: ItemProps;
  hasMore: boolean;
  loading: boolean;
};
const InfiniteList = <T extends { id: number; index: number }>(
  props: InfiniteListProps<T>
) => {
  const {
    // List of items that will go through `itemRenderer` function later.
    // Please note that each item MUST have a valid `index` property.
    items,

    // Item's height and margin are required and are used to calculate each item's top
    // so we can simulate a list layout with absolute positions.
    itemProps = { height: 300, margin: 10, style: {} },

    // Determines if `loadMoreItems` should be called when the list is scrolled to the
    // bottom or not.
    hasMore = true,

    // This callback function is called when ever user reaches the bottom of list.
    loadMoreItems = () => {},

    // Determines whether new data is being loaded or not.
    loading = false,

    // This function is used to render each item. It will be called for each item in
    // `items` array. since the rendered items are wrapped in an absolute positioned
    // div, there is no need to use a `key` prop.
    itemRenderer = (item) => item
  } = props;

  // This ref is used to get the list's height and scroll position.
  const listRef = useRef<HTMLDivElement>(null);

  // We need to keep track of list's height and scroll position to determine which
  // items are visible and which are not. So we can render only visible items.
  // We also need to know if user has reached the bottom of list or not.
  const [listHeight, setListHeight] = useState(0);
  const [listScrollTop, setListScrollTop] = useState(0);
  const [reachedEnd, setReachedEnd] = useState(false);

  const onWindowScroll = () => {
    if (!listRef.current) return;
    const { scrollTop, scrollHeight, offsetHeight } = listRef.current;
    setListScrollTop(scrollTop);
    setReachedEnd(scrollHeight - scrollTop < offsetHeight + 10);
  };

  const onWindowResize = () => {
    if (listRef.current) {
      const listHeight = listRef.current.offsetHeight;
      setListHeight(listHeight);
    }
  };

  useEffect(() => {
    onWindowResize();
    window.addEventListener("resize", onWindowResize);
    return () => window.removeEventListener("resize", onWindowResize);
  }, []);

  // Trigger `loadMoreItems` when user reaches the bottom of list.
  useEffect(() => {
    if (reachedEnd && hasMore) loadMoreItems();
  }, [reachedEnd, hasMore, loadMoreItems]);

  // This function to determines if an item is visible or not. It is used to
  // filter out invisible items. It uses `listScrollTop` and `listHeight` to calculate
  // the visible area of list. Then it uses item's index, height and margin to calculate
  // the visible area of each item. If the two areas overlap, the item is visible.
  const isVisible = (index: number) => {
    const { height, margin } = itemProps;
    const itemHeight = height + margin;

    const itemTop = index * itemHeight + margin;
    const itemBottom = itemTop + height;
    const listBottom = listScrollTop + listHeight + 3 * (itemHeight + margin);

    return (
      itemBottom > listScrollTop - 3 * (itemHeight + margin) - itemHeight &&
      itemTop < listBottom + itemHeight
    );
  };

  return (
    <InfiniteListWrapper ref={listRef} onScroll={onWindowScroll}>
      {items
        .filter(({ index }) => isVisible(index))
        .map((item) => (
          <ItemHolder
            key={item.id + "_" + item.index}
            {...itemProps}
            index={item.index}
            child={itemRenderer(item) as JSX.Element}
          />
        ))}

      <Box
        style={{
          top:
            items.length * (itemProps.height + itemProps.margin) +
            itemProps.margin
        }}
        className="extraBox"
      >
        {hasMore && loading && (
          <Box>
            <CircularProgress />
          </Box>
        )}
      </Box>
    </InfiniteListWrapper>
  );
};
export default InfiniteList;
