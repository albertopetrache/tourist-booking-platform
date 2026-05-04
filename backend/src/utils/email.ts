import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const {
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASS,
  EMAIL_FROM,
} = process.env;

// validare env
if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS || !EMAIL_FROM) {
  throw new Error("❌ Email environment variables are missing");
}

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: Number(EMAIL_PORT),
  secure: Number(EMAIL_PORT) === 465, // auto detect
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// verificare conexiune SMTP 
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP error:", error);
  } else {
    console.log("✅ SMTP server is ready");
  }
});

export const sendEmail = async (
  to: string,
  subject: string,
  html: string
) => {
  try {
    const info = await transporter.sendMail({
      from: EMAIL_FROM,
      to,
      subject,
      html,
    });

    console.log("📧 Email sent:", info.messageId);
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw new Error("Email failed to send");
  }
};