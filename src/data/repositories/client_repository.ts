import { doc, collection, setDoc } from "firebase/firestore";
import { db } from "../firebase/index";
import MyResponse, { Result } from "@/domain/MyResponse";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/index";
import InquiryModel from "@/domain/models/inquiry_model";

export default class ClientRepository {
  async enrollInquiry(inquiry: InquiryModel, logoUrl: string) {
    const timestamp = new Date();
    try {
      const newInquiry = new InquiryModel(
        timestamp,
        inquiry.picName,
        inquiry.productName,
        inquiry.contact,
        inquiry.productDetail,
        inquiry.productConsumer,
        inquiry.productAims,
        inquiry.otherInquiry,
        inquiry.mood,
        inquiry.color,
        inquiry.landing,
        inquiry.form,
        inquiry.board,
        inquiry.blog,
        inquiry.auth,
        inquiry.portfolio,
        logoUrl,
      ).toObject();
      const docRef = doc(collection(db, "inquiries"));
      await setDoc(docRef, newInquiry);
    } catch (error) {
      return new MyResponse(
        Result.Fail,
        "문의 서버 등록에 실패했습니다.",
        error
      );
    }
    return new MyResponse(
      Result.Success,
      "문의 서버 등록에 성공했습니다.",
      "Successfully enrolled inquiry to firebase"
    );
  }

  async submitLogoAndGetUrl(logoFile: File, imageName: string) {
    let storageRef;
    try {
      storageRef = ref(storage, imageName);
      await uploadBytes(storageRef, logoFile);
    } catch (error) {
      return new MyResponse(Result.Fail, "로고 등록에 실패했습니다.", error);
    }
    return new MyResponse(
      Result.Success,
      "로고 등록에 성공했습니다.",
      getDownloadURL(storageRef)
    );
  }
}
