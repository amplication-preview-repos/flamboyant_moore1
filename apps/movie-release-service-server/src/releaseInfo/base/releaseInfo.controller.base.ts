/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ReleaseInfoService } from "../releaseInfo.service";
import { ReleaseInfoCreateInput } from "./ReleaseInfoCreateInput";
import { ReleaseInfo } from "./ReleaseInfo";
import { ReleaseInfoFindManyArgs } from "./ReleaseInfoFindManyArgs";
import { ReleaseInfoWhereUniqueInput } from "./ReleaseInfoWhereUniqueInput";
import { ReleaseInfoUpdateInput } from "./ReleaseInfoUpdateInput";

export class ReleaseInfoControllerBase {
  constructor(protected readonly service: ReleaseInfoService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ReleaseInfo })
  async createReleaseInfo(
    @common.Body() data: ReleaseInfoCreateInput
  ): Promise<ReleaseInfo> {
    return await this.service.createReleaseInfo({
      data: data,
      select: {
        createdAt: true,
        id: true,
        info: true,
        releaseDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ReleaseInfo] })
  @ApiNestedQuery(ReleaseInfoFindManyArgs)
  async releaseInfos(@common.Req() request: Request): Promise<ReleaseInfo[]> {
    const args = plainToClass(ReleaseInfoFindManyArgs, request.query);
    return this.service.releaseInfos({
      ...args,
      select: {
        createdAt: true,
        id: true,
        info: true,
        releaseDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ReleaseInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async releaseInfo(
    @common.Param() params: ReleaseInfoWhereUniqueInput
  ): Promise<ReleaseInfo | null> {
    const result = await this.service.releaseInfo({
      where: params,
      select: {
        createdAt: true,
        id: true,
        info: true,
        releaseDate: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ReleaseInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateReleaseInfo(
    @common.Param() params: ReleaseInfoWhereUniqueInput,
    @common.Body() data: ReleaseInfoUpdateInput
  ): Promise<ReleaseInfo | null> {
    try {
      return await this.service.updateReleaseInfo({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          info: true,
          releaseDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ReleaseInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteReleaseInfo(
    @common.Param() params: ReleaseInfoWhereUniqueInput
  ): Promise<ReleaseInfo | null> {
    try {
      return await this.service.deleteReleaseInfo({
        where: params,
        select: {
          createdAt: true,
          id: true,
          info: true,
          releaseDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
