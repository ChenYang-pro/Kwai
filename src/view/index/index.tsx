import Introduction from './introduction';
import Commodity from './commodity';
import LikeLiHood from './likelihood';
import { fetchGoods } from '../common/queries';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useEffect } from 'react';

function Index() {
  const { data } = useQuery('goodsInfo', async () => {
    const { data } = await axios.get(`https://www.fastmock.site/mock/fdcb6edab58f19b4cf94349d04602270/kwai/api/${123}`);
    return data;
  });

  return (
    <div className="flex flex-col justify-center items-center ">
      <Introduction info={data} />
      <Commodity />
      <LikeLiHood />
    </div>
  );
}

export default Index;
