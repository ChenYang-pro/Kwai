import axios from 'axios';
import { goodsResponse } from './type';

async function fetchGoods() {
  const { data } = await axios.get<goodsResponse>(`https://www.fastmock.site/mock/fdcb6edab58f19b4cf94349d04602270/kwai/api/${123}`);

  return data;
}

export { fetchGoods };
