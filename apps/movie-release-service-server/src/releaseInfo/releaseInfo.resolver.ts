import * as graphql from "@nestjs/graphql";
import { ReleaseInfoResolverBase } from "./base/releaseInfo.resolver.base";
import { ReleaseInfo } from "./base/ReleaseInfo";
import { ReleaseInfoService } from "./releaseInfo.service";

@graphql.Resolver(() => ReleaseInfo)
export class ReleaseInfoResolver extends ReleaseInfoResolverBase {
  constructor(protected readonly service: ReleaseInfoService) {
    super(service);
  }
}
