import { MovieRequest as TMovieRequest } from "../api/movieRequest/MovieRequest";

export const MOVIEREQUEST_TITLE_FIELD = "country";

export const MovieRequestTitle = (record: TMovieRequest): string => {
  return record.country?.toString() || String(record.id);
};
