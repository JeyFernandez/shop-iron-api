import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateProviderDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    direction:string

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    Gmail:string

    @IsNumber()
    @IsNotEmpty()
    type_of_provider:string


    @IsString()
    @IsOptional()
    @IsArray()
    images?:string[]
}
