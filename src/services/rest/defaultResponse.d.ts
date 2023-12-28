export type DefaultPaginatedResponse<T> = {
  count: number;
  next: null | string;
  previous: null | string;
  results: T[];
};
