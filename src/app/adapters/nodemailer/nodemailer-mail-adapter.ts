import nodemailer from "nodemailer";
import { SendEmailAdapterDTO } from "../dto/i-mail-adapter-dto";
import { IMailAdapter } from "../interface/i-mail-adapters";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b7ccb8dfce2f82",
    pass: "c478d768987f15"
  }
});
export class NodemailerMailAdapter implements IMailAdapter{
  async sendEmail({ body, subject }: SendEmailAdapterDTO): Promise<void> {
    
    await transport.sendMail({
     from: "Equipe WLTECH <wltechfeedback@gmail.com>",
     to: 'Luan Dev <progrmadorwl@gmail.com>',
     subject,
     html: body
  })
  }
}