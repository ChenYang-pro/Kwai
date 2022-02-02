import Introduction from './introduction';
import Commodity from './commodity';
import LikeLiHood from './likelihood';
import { useQuery } from 'react-query';

import { useState } from 'react';
import { IntroMessage } from '../common/type';
import { fetchGoods } from '../common/queries';

function Index() {
  const [goodsData, setGoodsData] = useState<IntroMessage>();
  const { isLoading } = useQuery('goodsInfo', async () => {
    const data = await fetchGoods();
    setGoodsData(data.data);
  });

  if (isLoading) {
    return <div>is loading!</div>;
  }
  
  return (
    <div className="flex flex-col justify-center items-center ">
      <Introduction info={goodsData} />
      <Commodity />
      <LikeLiHood />
    </div>
  );
}

export default Index;
