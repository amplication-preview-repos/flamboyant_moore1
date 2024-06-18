import { ObjectType, Field } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

@ObjectType("ReleaseInfoDtoObject")
class ReleaseInfoDto {
    @Field(() => Date)
    @Type(() => Date)
    releaseDate!: Date;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    info!: string;
}

export { ReleaseInfoDto as ReleaseInfoDto };