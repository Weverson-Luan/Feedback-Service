import { Router } from "express";
import { NodemailerMailAdapter } from "../../adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbacksRepository } from "../../modules/feedbacks/repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbacksUseCase } from "../../modules/feedbacks/repositories/use-case/submit-feedback-use-case";

const router = Router();

router.post("/feedbacks", async (request, response)=> {

  const { type, comment, screenshot } = request.body;

  const prismaFeedbackRepository = new PrismaFeedbacksRepository();
  const nodemailerEmailAdapter = new NodemailerMailAdapter();

  const submitFeedbacksUseCase = new SubmitFeedbacksUseCase(
    prismaFeedbackRepository,
    nodemailerEmailAdapter,
  );

  await submitFeedbacksUseCase.execute({
    type,
    comment,
    screenshot
  })

  return response.status(201).json({
    message: 'Create feedback success', 
  });
});

export { router };