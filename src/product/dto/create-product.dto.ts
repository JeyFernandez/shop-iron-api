import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    details:string

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    categories:string

    @IsNumber()
    @IsNotEmpty()
    pirce:number

    @IsNumber()
    @IsNotEmpty()
    stock:number
}
