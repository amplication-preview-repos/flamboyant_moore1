import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MovieRequestServiceBase } from "./base/movieRequest.service.base";

@Injectable()
export class MovieRequestService extends MovieRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
