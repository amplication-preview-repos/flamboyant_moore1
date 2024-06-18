import { Module } from "@nestjs/common";
import { ReleaseInfoModuleBase } from "./base/releaseInfo.module.base";
import { ReleaseInfoService } from "./releaseInfo.service";
import { ReleaseInfoController } from "./releaseInfo.controller";
import { ReleaseInfoResolver } from "./releaseInfo.resolver";

@Module({
  imports: [ReleaseInfoModuleBase],
  controllers: [ReleaseInfoController],
  providers: [ReleaseInfoService, ReleaseInfoResolver],
  exports: [ReleaseInfoService],
})
export class ReleaseInfoModule {}
