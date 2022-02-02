interface IntroMessage {
  pic: Array<string>;
  price: object;
  goodsName: string;
  saleInfo: string;
  addressInfo: string;
}

interface basicResponse<T> {
  code: String;
  data: T;
  desc: String;
}

type goodsResponse = basicResponse<IntroMessage>;

export type { IntroMessage, basicResponse, goodsResponse };
