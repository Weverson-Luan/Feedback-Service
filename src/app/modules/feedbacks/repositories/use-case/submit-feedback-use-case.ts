import { IMailAdapter } from "../../../../adapters/interface/i-mail-adapters";
import { IFeedbackCreateDTOUseCaseRequest } from "../dtos/feedbacks/feedbacks-dto-use-case-request";
import { IFeedbackRepository } from "../interface/feedbacks-repository";


export class SubmitFeedbacksUseCase{
  constructor(
    private readonly feedbacksRepository: IFeedbackRepository,
    private readonly mailAdapter: IMailAdapter,
  ){}

  async execute({ type, comment, screenshot }: IFeedbackCreateDTOUseCaseRequest){

  if(!type){
    throw new Error('Type is required.');
  }

  if(!comment){
    throw new Error('Comment is required.');
  }

  if(screenshot && !screenshot.startsWith('data:image/png;base64')){
    throw new Error('Invalid screenshot format.')
  }

  await this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    });

  await this.mailAdapter.sendEmail({
    subject: 'Novo feedback',
    body:  [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
      `<p> Tipo do feedback: ${type}</p>`,
      `<p> Tipo do feedback: ${comment}</p>`,
      `</div>`
   ].join('\n')
  })
  }
}