import { Contact, Color, PageSelection } from "../Types";

export default class InquiryModel {
  picName: string;
  company: string;
  contact: Contact;
  productDetail: string;
  productConsumer: string;
  productAims: string;
  logoUrl: string;
  otherInquiry: string;
  mood: string[];
  color: Color;
  landingPageSelection: PageSelection;
  formPageSelection: PageSelection;
  boardPageSelection: PageSelection;
  blogPageSelection: PageSelection;
  authPageSelection: PageSelection;
  portfolioPageSelection: PageSelection;
  createdAt: Date;

  constructor(
    picName: string,
    company: string,
    contact: Contact,
    productDetail: string,
    productConsumer: string,
    productAims: string,
    logoUrl: string,
    otherInquiry: string,
    mood: string[],
    color: Color,
    landingPageSelection: PageSelection,
    formPageSelection: PageSelection,
    boardPageSelection: PageSelection,
    blogPageSelection: PageSelection,
    authPageSelection: PageSelection,
    portfolioPageSelection: PageSelection,
    createdAt: Date,
  ) {
    this.picName = picName;
    this.company = company;
    this.contact = contact;
    this.productDetail = productDetail;
    this.productConsumer = productConsumer;
    this.productAims = productAims;
    this.logoUrl = logoUrl;
    this.otherInquiry = otherInquiry;
    this.mood = mood;
    this.color = color;
    this.landingPageSelection = landingPageSelection;
    this.formPageSelection = formPageSelection;
    this.boardPageSelection = boardPageSelection;
    this.blogPageSelection = blogPageSelection;
    this.authPageSelection = authPageSelection;
    this.portfolioPageSelection = portfolioPageSelection;
    this.createdAt = createdAt;
  }

  toObject() {
    return {
      picName: this.picName,
      company: this.company,
      contact: this.contact,
      productDetail: this.productDetail,
      productConsumer: this.productConsumer,
      productAims: this.productAims,
      logoUrl: this.logoUrl,
      otherInquiry: this.otherInquiry,
      mood: this.mood,
      color: this.color,
      landingPageSelection: this.landingPageSelection,
      formPageSelection: this.formPageSelection,
      boardPageSelection: this.boardPageSelection,
      blogPageSelection: this.blogPageSelection,
      authPageSelection: this.authPageSelection,
      portfolioPageSelection: this.portfolioPageSelection,
      createdAt: this.createdAt,
    };
  }
}
