import ClientRepository from "@/data/repositories/client_repository";
import MyResponse, { Result } from "../MyResponse";
import InquiryModel from "../models/inquiry_model";

export default class SubmitInquiryUseCase {
  validateInquiry(inquiry: InquiryModel) {
    const requiredContents = {
      picName: inquiry.picName,
      productName: inquiry.productName,
      contact: inquiry.contact,
      productDetail: inquiry.productDetail,
      productConsumer: inquiry.productConsumer,
      productAims: inquiry.productAims,
    };
    const emptyKeys = [];
    for (let key in requiredContents as { [key: string]: any }) {
      const value = requiredContents[key as keyof typeof requiredContents];
      if (!value || (typeof value === "string" && value.trim() === "")) {
        emptyKeys.push(key);
      }
    }
    if (emptyKeys.length === 0) {
      return new MyResponse(Result.Success, "필수 질문이 모두 응답되었습니다");
    } else {
      return new MyResponse(
        Result.Fail,
        `${emptyKeys} 필드가 비어있습니다.`,
        emptyKeys
      );
    }
  }

  async enrollInquiry(inquiry: InquiryModel, imageData?: File) {
    let response;
    try {
      const client_repository = new ClientRepository();
      let logoUrl = "없음";
      if (imageData) {
        logoUrl = await (
          await client_repository.submitLogoAndGetUrl(
            imageData,
            inquiry.productName
          )
        ).payload;
      }
      response = await client_repository.enrollInquiry(inquiry, logoUrl);
    } catch (error) {
      return new MyResponse(Result.Fail, "문의 등록에 실패했습니다.", error);
    }
    return new MyResponse(
      Result.Success,
      "문의 등록에 성공했습니다.",
      response
    );
  }
}
