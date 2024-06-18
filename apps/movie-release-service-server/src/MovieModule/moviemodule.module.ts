import { Module } from "@nestjs/common";
import { MovieModuleService } from "./moviemodule.service";
import { MovieModuleController } from "./moviemodule.controller";
import { MovieModuleResolver } from "./moviemodule.resolver";

@Module({
  controllers: [MovieModuleController],
  providers: [MovieModuleService, MovieModuleResolver],
  exports: [MovieModuleService],
})
export class MovieModuleModule {}
