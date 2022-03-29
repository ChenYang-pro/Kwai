interface PriceObj {
  current: Number;
  actual: Number;
}

interface IntroMessage {
  pic: Array<string>;
  price: PriceObj;
  goodsName: string;
  saleInfo: string;
  addressInfo: string;
}

interface MerchantObj {
  produceQuality: number;
  serviceQuality: number;
  deliveryQuality: number;
  afterQuality: number;
}
interface MerchantMessage {
  merchantName: string;
  totalSale: number;
  goodsName: string;
  merchantStar: number;
  merchantScore: MerchantObj;
}

interface RecommendCards {
  page: number;
  totalNumber: number;
  pic: string;
  id: string;
  recommendName: string;
  recommendPrice: number;
  recommendSale: number;
}
interface RecommendMessage {
  cards: Array<RecommendCards>;
}

interface basicResponse<T> {
  code: String;
  data: T;
  desc: String;
}

type GoodsResponse = basicResponse<IntroMessage>;
type MerchantResponse = basicResponse<MerchantMessage>;
type RecommendResponse = basicResponse<RecommendMessage>;

export type {
  IntroMessage,
  MerchantMessage,
  RecommendMessage,
  RecommendCards,
  basicResponse,
  GoodsResponse,
  MerchantResponse,
  RecommendResponse
};
