import { Injectable, UnauthorizedException } from '@nestjs/common';
import { emailOtp } from './dto/emailOtp.dto';
import { MailerService } from 'src/mailer/mailer.service';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {

    constructor(
        private readonly mailerService: MailerService,
        private readonly prisma: DatabaseService,
    ) { }

    async sendOtp(email: string) {
        const otp = Math.floor(100000 + Math.random() * 100000).toString()
        const hashedOtp = await bcrypt.hash(otp, 10)

        await this.prisma.otp.upsert({
            where: { email },
            update: { otp: hashedOtp, createdAt: new Date() },
            create: { email, otp: hashedOtp }
        })

        await this.mailerService.sendCode(
            `here is your otp code dont give it to no one < ${otp} >`,
            email
        )

        return `otp sen to ${email}`
    }

    async verifyOtp(email: string, otp: string) {
        const session = await this.prisma.otp.findUnique({ where: { email } });

        if (!session) return "invalid email";

        const isExpired = Date.now() - new Date(session.createdAt).getTime() > 10 * 60 * 1000;
        if(isExpired){
            await this.prisma.otp.delete({where: {email}});
            throw new UnauthorizedException("OTP expired");
        }

        const isMatch = await bcrypt.compare(otp, session.otp);
        if(!isMatch) {
            throw new UnauthorizedException("invalid otp");
        }

        return 'otp passed'
    }
}
