import { SendEmailAdapterDTO } from "../dto/i-mail-adapter-dto";


interface IMailAdapter{
  sendEmail(data: SendEmailAdapterDTO): Promise<void>;
};

export { IMailAdapter };