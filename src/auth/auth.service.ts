import { Injectable } from '@nestjs/common';
import { emailOtp } from './dto/emailOtp.dto';
import { MailerService } from 'src/mailer/mailer.service';

@Injectable()
export class AuthService {

    constructor(private readonly mailerService: MailerService) { }

    async sendOtp(email: string) {
        const otp = Math.floor(100000 + Math.random() * 100000).toString();

        try {
            
        await this.mailerService.sendCode(
            `here is your otp code dont give it to no one < ${otp} >`,
            email
        )

        } catch (error) {
                console.log("error while sending code" + error);
        }

        return `code sent to ${email}`
        
    }
}
