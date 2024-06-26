import Mail = require('nodemailer/lib/mailer');
import * as nodemailser from 'nodemailer';

import { Inject, Injectable } from '@nestjs/common';
import emailConfig from 'src/config/emailConfig';
import { ConfigType } from '@nestjs/config';

interface EmailOptions {
    to:string;
    subject:string;
    html:string;
}

@Injectable()
export class EmailService {
    private transporter: Mail;

    constructor(
        @Inject(emailConfig.KEY) private config: ConfigType<typeof emailConfig>
    )
    {    
        this.transporter = nodemailser.createTransport({
            service: config.service,
            auth: {
                user: config.auth.user,
                pass: config.auth.pass,
            }
        });
    }

    async sendMemberJoinVerification(emailAddress:string, signupVerifyToken:string){
        const baseUrl = this.config.baseUrl;

        const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;

        const mailOption: EmailOptions = {
            to:emailAddress,
            subject:'가입인증 메일',
            html: `
                가입확인 버튼을 누르시면 가입 인증이 완료 됩니다.<br/>
                <form action="${url}" method="POST">
                    <button>가입확인</button>
                </form>
            `
        }

        return await this.transporter.sendMail(mailOption);
    }
}
