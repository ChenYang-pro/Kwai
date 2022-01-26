import React from 'react';
import Introduction from './introduction';
import Commodity from './commodity';
import LikeLiHood from './likelihood';
import { IntroMessage } from '../common/type';

function Index() {
  const info: IntroMessage = {
    pic: [
      'https://p2.eckwai.com/ufile/adsocial/1dc759e9-7c62-4ca8-9444-11891bdcbaa1.jpg',
      'https://p2.eckwai.com/ufile/adsocial/1dc759e9-7c62-4ca8-9444-11891bdcbaa1.jpg'
    ],
    price: {
      current: 228,
      actual: 226
    },
    goodsName: '测试商品',
    saleInfo: '测试商品勿拍不发货快手小块',
    addressInfo: '48小时内从北京市市辖区发货'
  };

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <Introduction info={info} />
      <Commodity />
      <LikeLiHood />
    </div>
  );
}

export default Index;
