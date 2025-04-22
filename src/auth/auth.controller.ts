import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { emailOtp } from './dto/emailOtp.dto';

@Controller('auth')
export class AuthController {
    constructor (private readonly authservice:AuthService) {}

    @Post('send-otp')
    sendOtp(@Body() dto: emailOtp){
        return this.authservice.sendOtp(dto.email);
    }
}
