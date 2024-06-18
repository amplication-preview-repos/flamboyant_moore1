import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ReleaseInfoWhereInput = {
  id?: StringFilter;
  info?: StringNullableFilter;
  releaseDate?: DateTimeNullableFilter;
};
