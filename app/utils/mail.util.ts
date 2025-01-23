import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const tranport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD
    }
} as SMTPTransport.Options);

interface EmailFields {
    name: string;
    email: string;
    message: string;
}

export const sendEmail = async(form: EmailFields)=> {
    const {name, email, message} = form;
    const mailOption = {
        from: email,
        to: process.env.SMTP_MAIL,
        html: message,
        subject: `New message from ${name}`,
        text: message
    }
    return await tranport.sendMail(mailOption);
}