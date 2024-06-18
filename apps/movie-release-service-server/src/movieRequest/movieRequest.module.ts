import { Module } from "@nestjs/common";
import { MovieRequestModuleBase } from "./base/movieRequest.module.base";
import { MovieRequestService } from "./movieRequest.service";
import { MovieRequestController } from "./movieRequest.controller";
import { MovieRequestResolver } from "./movieRequest.resolver";

@Module({
  imports: [MovieRequestModuleBase],
  controllers: [MovieRequestController],
  providers: [MovieRequestService, MovieRequestResolver],
  exports: [MovieRequestService],
})
export class MovieRequestModule {}
