import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface IRequest {
  name: string;
  email: string;
  message: string;
}

const validateRequest = (req: NextApiRequest): IRequest => {
  const { name, email, message } = req.json();
  if (!name || !email || !message) {
    throw new Error("Invalid request");
  }
  return { name, email, message };
};

const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });
};

const sendMail = async (transporter: nodemailer.Transporter, mailOptions: nodemailer.MailOptions) => {
  try {
    const mailRes = await transporter.sendMail(mailOptions);
    return mailRes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default async function handler(req: NextApiRequest) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = validateRequest(req);
      const transporter = createTransporter();
      const mailOptions = {
        from: email,
        to: process.env.MY_EMAIL,
        subject: `New message from ${name}`,
        text: `Name: ${name}\n Email: ${email} Mssage: ${message}`,
      };
      const mailRes = await sendMail(transporter, mailOptions);
      return new NextResponse(JSON.stringify(mailRes), { status: 200 });
    } catch (error: any) {
      console.error(error);
      return new NextResponse(JSON.stringify({ message: error.message }), { status: 500 });
    }
  }
}