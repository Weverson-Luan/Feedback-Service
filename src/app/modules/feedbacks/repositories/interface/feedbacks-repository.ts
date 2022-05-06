import { IFeedbackCreateDTO } from "../dtos/feedbacks/feedbacks-dto-repository";


// contract from my repository feedbacks
interface IFeedbackRepository {
  create: (data: IFeedbackCreateDTO) => Promise<void>;
};

export { IFeedbackRepository };