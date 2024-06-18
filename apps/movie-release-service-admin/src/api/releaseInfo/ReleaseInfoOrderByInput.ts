import { SortOrder } from "../../util/SortOrder";

export type ReleaseInfoOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  info?: SortOrder;
  releaseDate?: SortOrder;
  updatedAt?: SortOrder;
};
