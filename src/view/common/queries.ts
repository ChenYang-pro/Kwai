import axios from 'axios';
import { GoodsResponse, MerchantResponse, RecommendResponse } from './type';

async function fetchGoods() {
  const { data } = await axios.get<GoodsResponse>(`https://www.fastmock.site/mock/fdcb6edab58f19b4cf94349d04602270/kwai/api/${123}/123`);
  return data;
}

async function fetchMerchant() {
  const { data } = await axios.get<MerchantResponse>(`https://www.fastmock.site/mock/fdcb6edab58f19b4cf94349d04602270/kwai/api/${123}`);
  return data;
}

async function fetchRecommend() {
  const { data } = await axios.get<RecommendResponse>(`https://www.fastmock.site/mock/fdcb6edab58f19b4cf94349d04602270/kwai/api/likelihood`);
  return data;
}

export { fetchGoods, fetchMerchant, fetchRecommend };
