import { IsString, IsNotEmpty, IsNumber, MinLength, IsEmail } from 'class-validator';

export class CreateClientDto{
    
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    lastName: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    direction: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:string

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    dni: string;
}