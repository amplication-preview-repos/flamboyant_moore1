import { Injectable } from "@nestjs/common";
import { MovieRequestDto } from "../movieModule/MovieRequestDto";
import { ReleaseInfoDto } from "../movieModule/ReleaseInfoDto";

@Injectable()
export class MovieModuleService {
  constructor() {}
  async FetchMovieReleaseDates(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetMovieReleaseDates(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetMovieReleaseInfo(args: MovieRequestDto): Promise<ReleaseInfoDto> {
    throw new Error("Not implemented");
  }
}
