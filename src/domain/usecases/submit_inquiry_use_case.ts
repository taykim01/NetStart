import ClientRepository from "@/data/repositories/client_repository";
import MyResponse, { Result } from "../MyResponse";
import InquiryModel from "../models/inquiry_model";

export default class SubmitInquiryUseCase {
    validateInquiry() {

    }

    async enrollInquiry(inquiry: InquiryModel, imageData: File){
        let response;
        try {
            const client_repository = new ClientRepository()
            const logoUrl = (await client_repository.submitLogoAndGetUrl(imageData, inquiry.company)).payload
            response = await client_repository.enrollInquiry(inquiry, logoUrl)
        } catch (error) {
            return new MyResponse(Result.Fail, "문의 등록에 실패했습니다.", error)
        }
        return new MyResponse(Result.Success, "문의 등록에 성공했습니다.", response)
    }
}