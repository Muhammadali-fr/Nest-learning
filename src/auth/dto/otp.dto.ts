import { IsString } from "class-validator";

export class OtpDto {
    @IsString()
    dto: String;
}