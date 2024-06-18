/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MovieRequestWhereInput } from "./MovieRequestWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MovieRequestListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MovieRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => MovieRequestWhereInput)
  @IsOptional()
  @Field(() => MovieRequestWhereInput, {
    nullable: true,
  })
  every?: MovieRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => MovieRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => MovieRequestWhereInput)
  @IsOptional()
  @Field(() => MovieRequestWhereInput, {
    nullable: true,
  })
  some?: MovieRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => MovieRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => MovieRequestWhereInput)
  @IsOptional()
  @Field(() => MovieRequestWhereInput, {
    nullable: true,
  })
  none?: MovieRequestWhereInput;
}
export { MovieRequestListRelationFilter as MovieRequestListRelationFilter };
