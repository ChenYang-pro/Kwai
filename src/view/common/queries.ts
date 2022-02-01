import axios from 'axios';
import { goodsResponse } from '../common/type';

async function fetchGoods() {
  const res: goodsResponse = await axios.get(`https://www.fastmock.site/mock/fdcb6edab58f19b4cf94349d04602270/kwai/api/${123}`);
  console.log('res', res);
  return res;
}

export { fetchGoods };
