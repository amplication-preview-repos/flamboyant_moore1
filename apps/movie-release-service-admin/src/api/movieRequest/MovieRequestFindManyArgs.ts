import { MovieRequestWhereInput } from "./MovieRequestWhereInput";
import { MovieRequestOrderByInput } from "./MovieRequestOrderByInput";

export type MovieRequestFindManyArgs = {
  where?: MovieRequestWhereInput;
  orderBy?: Array<MovieRequestOrderByInput>;
  skip?: number;
  take?: number;
};
