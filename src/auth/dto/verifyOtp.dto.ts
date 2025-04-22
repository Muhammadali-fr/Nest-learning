import { IsInt, IsString } from "class-validator";

export class verifyOtpDto{
    @IsString()
    email: string

    @IsInt()
    otp: string
}