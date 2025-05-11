import { Injectable } from '@nestjs/common';
import * as nodemailer from "nodemailer";
import { Transporter } from "nodemailer";


@Injectable()
export class MailerService {
    private transporter: Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        });
    }
    sendCode(text: string, email: string) {
        this.transporter.sendMail({
            from: `"Muhammadali's auth" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Checking",
            html: `<h1 className="text-red-700">${text}</h1> <p>hello</p> <strong>${email}</strong>`
        })
    }
}

