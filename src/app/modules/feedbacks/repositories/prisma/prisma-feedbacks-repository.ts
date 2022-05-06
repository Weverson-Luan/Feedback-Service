import { prisma } from "../../../../shared/prisma/prisma";
import { IFeedbackCreateDTO } from "../dtos/feedbacks/feedbacks-dto-repository";
import { IFeedbackRepository } from "../interface/feedbacks-repository";


class PrismaFeedbacksRepository implements IFeedbackRepository {
  async create({ type, comment, screenshot }: IFeedbackCreateDTO){
     await prisma.feedback.create({
      data: {
         type,
         comment,
         screenshot
      }
    });
    return;
  }
};

export { PrismaFeedbacksRepository };