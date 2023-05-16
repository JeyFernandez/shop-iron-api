import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateClientDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    direction: string;

    @IsNumber()
    @IsNotEmpty()
    phoneNumber: number;

    @IsString()
    @IsNotEmpty()
    dni: string;
}