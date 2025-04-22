import { IsString } from "class-validator";

export class emailOtp {
    @IsString()
    email: string;
}