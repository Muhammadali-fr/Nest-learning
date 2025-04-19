import {IsEmail, IsString, MinLength} from "class-validator"

export class CreateUserDto {
    @IsString()
    name: String;

    @IsEmail()
    email: String;

    @MinLength(6)
    password: String;

}
