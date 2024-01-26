import { Contact, Color, PageSelection } from "../Types";

export default class InquiryModel {
  picName: string;
  productName: string;
  contact: Contact;
  productDetail: string;
  productConsumer: string;
  productAims: string;
  logoUrl: string;
  otherInquiry: string;
  mood: string[];
  color: Color;
  landing: PageSelection;
  form: PageSelection;
  board: PageSelection;
  blog: PageSelection;
  auth: PageSelection;
  portfolio: PageSelection;
  createdAt: Date;

  constructor(
    picName: string,
    productName: string,
    contact: Contact,
    productDetail: string,
    productConsumer: string,
    productAims: string,
    logoUrl: string,
    otherInquiry: string,
    mood: string[],
    color: Color,
    landing: PageSelection,
    form: PageSelection,
    board: PageSelection,
    blog: PageSelection,
    auth: PageSelection,
    portfolio: PageSelection,
    createdAt: Date,
  ) {
    this.picName = picName;
    this.productName = productName;
    this.contact = contact;
    this.productDetail = productDetail;
    this.productConsumer = productConsumer;
    this.productAims = productAims;
    this.logoUrl = logoUrl;
    this.otherInquiry = otherInquiry;
    this.mood = mood;
    this.color = color;
    this.landing = landing;
    this.form = form;
    this.board = board;
    this.blog = blog;
    this.auth = auth;
    this.portfolio = portfolio;
    this.createdAt = createdAt;
  }

  toObject() {
    return {
      picName: this.picName,
      productName: this.productName,
      contact: this.contact,
      productDetail: this.productDetail,
      productConsumer: this.productConsumer,
      productAims: this.productAims,
      logoUrl: this.logoUrl,
      otherInquiry: this.otherInquiry,
      mood: this.mood,
      color: this.color,
      landing: this.landing,
      form: this.form,
      board: this.board,
      blog: this.blog,
      auth: this.auth,
      portfolio: this.portfolio,
      createdAt: this.createdAt,
    };
  }
}
