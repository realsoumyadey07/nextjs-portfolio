import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export default async function sendMail(req: Request, res: Response){
    if(req.method === "POST"){
        const { name, email, message } = req.body as any;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });
        const mailOptions = {
            from: email,
            to: process.env.MY_EMAIL,
            subject: `New message from ${name}`,
            message: `Name: ${name}\n Email: ${email} Mssage: ${message}`
        }
        try {
            const mailRes = await transporter.sendMail(mailOptions);
            return new NextResponse(JSON.stringify(mailRes), {status: 200});
        } catch (error: any) {
            return new NextResponse(JSON.stringify({message: error.message}), {status: 500});
        }
    }
}