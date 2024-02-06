import { Color, PageSelection } from "../Types";

export default class InquiryModel {
  createdAt: Date;
  picName: string;
  productName: string;
  contact: string;
  productDetail: string;
  productConsumer: string;
  productAims: string;
  otherInquiry: string;
  mood: [];
  color: Color;
  main: PageSelection;
  form: PageSelection;
  board: PageSelection;
  blog: PageSelection;
  auth: PageSelection;
  portfolio: PageSelection;
  logoUrl: string;

  constructor(
    createdAt: Date,
    picName: string,
    productName: string,
    contact: string,
    productDetail: string,
    productConsumer: string,
    productAims: string,
    otherInquiry: string,
    mood: [],
    color: Color,
    main: PageSelection,
    form: PageSelection,
    board: PageSelection,
    blog: PageSelection,
    auth: PageSelection,
    portfolio: PageSelection,
    logoUrl: string,
  ) {
    this.createdAt = createdAt;
    this.picName = picName;
    this.productName = productName;
    this.contact = contact;
    this.productDetail = productDetail;
    this.productConsumer = productConsumer;
    this.productAims = productAims;
    this.otherInquiry = otherInquiry;
    this.mood = mood;
    this.color = color;
    this.main = main;
    this.form = form;
    this.board = board;
    this.blog = blog;
    this.auth = auth;
    this.portfolio = portfolio;
    this.logoUrl = logoUrl;
  }

  toObject() {
    return {
      createdAt: this.createdAt,
      picName: this.picName,
      productName: this.productName,
      contact: this.contact,
      productDetail: this.productDetail,
      productConsumer: this.productConsumer,
      productAims: this.productAims,
      otherInquiry: this.otherInquiry,
      mood: this.mood,
      color: this.color,
      main: this.main,
      form: this.form,
      board: this.board,
      blog: this.blog,
      auth: this.auth,
      portfolio: this.portfolio,
      logoUrl: this.logoUrl,
    };
  }
}
