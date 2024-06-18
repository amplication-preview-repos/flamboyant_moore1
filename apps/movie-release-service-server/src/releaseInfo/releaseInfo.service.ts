import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReleaseInfoServiceBase } from "./base/releaseInfo.service.base";

@Injectable()
export class ReleaseInfoService extends ReleaseInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
