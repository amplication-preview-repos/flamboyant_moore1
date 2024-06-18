import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MovieRequestService } from "./movieRequest.service";
import { MovieRequestControllerBase } from "./base/movieRequest.controller.base";

@swagger.ApiTags("movieRequests")
@common.Controller("movieRequests")
export class MovieRequestController extends MovieRequestControllerBase {
  constructor(protected readonly service: MovieRequestService) {
    super(service);
  }
}
