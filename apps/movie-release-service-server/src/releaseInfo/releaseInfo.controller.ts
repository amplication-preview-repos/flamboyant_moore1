import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReleaseInfoService } from "./releaseInfo.service";
import { ReleaseInfoControllerBase } from "./base/releaseInfo.controller.base";

@swagger.ApiTags("releaseInfos")
@common.Controller("releaseInfos")
export class ReleaseInfoController extends ReleaseInfoControllerBase {
  constructor(protected readonly service: ReleaseInfoService) {
    super(service);
  }
}
