import { IsString, IsNotEmpty, IsNumber, MinLength } from 'class-validator';

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

    @IsNumber()
    @IsNotEmpty()
    phoneNumber: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    dni: string;
}