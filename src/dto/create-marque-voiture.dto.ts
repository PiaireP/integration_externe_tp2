import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateMarqueVoitureDto {
    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    readonly yearCreation: number;
    
    @IsString()
    @MaxLength(60)
    @IsNotEmpty()
    readonly country: string;
}