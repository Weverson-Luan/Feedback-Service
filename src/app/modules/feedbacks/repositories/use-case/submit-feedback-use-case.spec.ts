import { SubmitFeedbacksUseCase } from "./submit-feedback-use-case";

//function observable when is executed
const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn();

describe("Submit feedback", ()=> {
  const submitFeedback = new SubmitFeedbacksUseCase(
    { create: createFeedbackSpy },
    { sendEmail: sendEmailSpy },
  );
  it("It should be possible to submit a feedback", async ()=> {

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,sss'
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendEmailSpy).toHaveBeenCalled();
  });

  it("it should not be possible to create a feedback without the type", async ()=> {

    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,sss'
    })).rejects.toThrow();
  });

  it("it should not be possible to create a feedback without the comment", async ()=> {

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,sss'
    })).rejects.toThrow();
  });

  it("should not be able to submit feedback with an invalid screenshot", async ()=> {

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'comment example',
      screenshot: '6i4k39d9sme'
    })).rejects.toThrow();
  });
});