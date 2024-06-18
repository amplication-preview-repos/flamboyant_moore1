import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MovieRequestWhereInput = {
  country?: StringNullableFilter;
  id?: StringFilter;
  tmdbId?: StringNullableFilter;
};
