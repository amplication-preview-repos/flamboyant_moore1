import { SortOrder } from "../../util/SortOrder";

export type MovieRequestOrderByInput = {
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  tmdbId?: SortOrder;
  updatedAt?: SortOrder;
};
