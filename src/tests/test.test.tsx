import { render, screen } from "@testing-library/react";
import InfiniteList, { InfiniteListProps } from "components/InfiniteList";
import { expect, test, vi } from "vitest";
const mockItems = [
  { id: 1, index: 0 },
  { id: 2, index: 1 },
  { id: 3, index: 2 }
];

const mockItemRenderer = (item:{id:number}) => <div role="item">{item.id}</div>;

const mockLoadMoreItems = vi.fn(() => 0);

const mockItemProps = {
  height: 100,
  margin: 10
};

const mockInfiniteListProps: InfiniteListProps<(typeof mockItems)[0]> = {
  items: mockItems,
  itemRenderer: mockItemRenderer,
  loadMoreItems: mockLoadMoreItems,
  itemProps: mockItemProps,
  hasMore: true,
  loading: false
};

test("renders InfiniteList component with items", () => {
  render(<InfiniteList {...mockInfiniteListProps} />);
  const renderedItems = screen.getAllByRole("item");
  expect(renderedItems).toHaveLength(mockItems.length);
});


test("renders loading indicator when loading more items", () => {
  render(<InfiniteList {...mockInfiniteListProps} loading={true} />);
  const loadingIndicator = screen.getByRole("progressbar");
  expect(loadingIndicator).toBeInTheDocument()!;
});

