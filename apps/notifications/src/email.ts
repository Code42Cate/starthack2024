import { Resend } from "resend";
const resend = new Resend(process.env.SENDGRID_API_KEY);

export async function sendEmail(to: string, subject: string, text: string) {
  return resend.emails.send({
    from: "team@startglobal.com",
    subject,
    to,
    text,
  });
}
