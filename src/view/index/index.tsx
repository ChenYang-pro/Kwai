import Introduction from './introduction';
import Commodity from './commodity';
import Merchant from './merchant';
import LikeLiHood from './likelihood';
import Footer from './footer';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { IntroMessage, MerchantMessage } from '../common/type';
import { fetchGoods, fetchMerchant } from '../common/queries';

function Index() {
  const [goodsData, setGoodsData] = useState<IntroMessage>();
  const [merchantData, setMerchantData] = useState<MerchantMessage>();

  const { isLoading: goodsIsLoading } = useQuery('goodsInfo', async () => {
    const data = await fetchGoods();
    setGoodsData(data.data);
  });
  const { isLoading: MerchantIsLoading } = useQuery('merchantInfo', async () => {
    const data = await fetchMerchant();
    setMerchantData(data.data);
  });

  if (goodsIsLoading || MerchantIsLoading) {
    return <div>is loading!</div>;
  }
  return (
    <div className="flex flex-col justify-center items-center ">
      <Introduction goodsInfo={goodsData} />
      <Merchant merchantInfo={merchantData} />
      <Commodity goodsInfo={goodsData} />
      <LikeLiHood />
      <Footer />
    </div>
  );
}

export default Index;
