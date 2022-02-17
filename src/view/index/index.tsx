import Introduction from './introduction';
import Commodity from './commodity';
import Merchant from './merchant';
import LikeLiHood from './likelihood';
import Footer from './footer';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { IntroMessage, MerchantMessage, RecommendMessage } from '../common/type';
import { fetchGoods, fetchMerchant, fetchRecommend } from '../common/queries';

function Index() {
  const [goodsData, setGoodsData] = useState<IntroMessage>();
  const [merchantData, setMerchantData] = useState<MerchantMessage>();
  const [recommendData, setRecommendData] = useState<RecommendMessage>();

  const { isLoading: goodsIsLoading } = useQuery('goodsInfo', async () => {
    const data = await fetchGoods();
    setGoodsData(data.data);
  });
  const { isLoading: MerchantIsLoading } = useQuery('merchantInfo', async () => {
    const data = await fetchMerchant();
    setMerchantData(data.data);
  });
  const { isLoading: RecommendIsLoading } = useQuery('recommendInfo', async () => {
    const data = await fetchRecommend();
    setRecommendData(data.data);
  });

  if (goodsIsLoading || MerchantIsLoading || RecommendIsLoading) {
    return <div>is loading!</div>;
  }
  return (
    <div className="flex flex-col justify-center items-center ">
      <Introduction goodsInfo={goodsData} />
      <Merchant merchantInfo={merchantData} />
      <Commodity goodsInfo={goodsData} />
      <LikeLiHood recommendInfo={recommendData} />
      <Footer />
    </div>
  );
}

export default Index;
