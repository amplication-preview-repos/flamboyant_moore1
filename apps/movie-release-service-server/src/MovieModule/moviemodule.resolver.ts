import * as graphql from "@nestjs/graphql";
import { MovieRequestDto } from "../movieModule/MovieRequestDto";
import { ReleaseInfoDto } from "../movieModule/ReleaseInfoDto";
import { MovieModuleService } from "./moviemodule.service";

export class MovieModuleResolver {
  constructor(protected readonly service: MovieModuleService) {}

  @graphql.Query(() => String)
  async FetchMovieReleaseDates(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.FetchMovieReleaseDates(args);
  }

  @graphql.Query(() => String)
  async GetMovieReleaseDates(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetMovieReleaseDates(args);
  }

  @graphql.Query(() => ReleaseInfoDto)
  async GetMovieReleaseInfo(
    @graphql.Args()
    args: MovieRequestDto
  ): Promise<ReleaseInfoDto> {
    return this.service.GetMovieReleaseInfo(args);
  }
}
