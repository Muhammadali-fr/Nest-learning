import { IsString } from "class-validator";

export class OtpDto {
    @IsString()
    email: string;

    @IsString()
    otp: String;
}