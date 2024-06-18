import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MovieModuleService } from "./moviemodule.service";
import { MovieRequestDto } from "../movieModule/MovieRequestDto";
import { ReleaseInfoDto } from "../movieModule/ReleaseInfoDto";

@swagger.ApiTags("movieModules")
@common.Controller("movieModules")
export class MovieModuleController {
  constructor(protected readonly service: MovieModuleService) {}

  @common.Get("/:id/fetch-movie-release-dates")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchMovieReleaseDates(
    @common.Body()
    body: MovieRequestDto
  ): Promise<string> {
        return this.service.FetchMovieReleaseDates(body);
      }

  @common.Get("/:id/get-movie-release-dates")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetMovieReleaseDates(
    @common.Body()
    body: MovieRequestDto
  ): Promise<string> {
        return this.service.GetMovieReleaseDates(body);
      }

  @common.Post("/movie/release-info")
  @swagger.ApiOkResponse({
    type: ReleaseInfoDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetMovieReleaseInfo(
    @common.Body()
    body: MovieRequestDto
  ): Promise<ReleaseInfoDto> {
        return this.service.GetMovieReleaseInfo(body);
      }
}
