import * as graphql from "@nestjs/graphql";
import { MovieRequestResolverBase } from "./base/movieRequest.resolver.base";
import { MovieRequest } from "./base/MovieRequest";
import { MovieRequestService } from "./movieRequest.service";

@graphql.Resolver(() => MovieRequest)
export class MovieRequestResolver extends MovieRequestResolverBase {
  constructor(protected readonly service: MovieRequestService) {
    super(service);
  }
}
