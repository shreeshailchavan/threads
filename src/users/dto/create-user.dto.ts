import { IsNotEmpty, isNotEmpty, IsNotIn, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name:string;
}
