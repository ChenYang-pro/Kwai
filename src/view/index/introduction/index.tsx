import { IntroMessage } from '../../common/type';
import { RightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import { useState } from 'react';
type propsType = {
  goodsInfo: IntroMessage | undefined;
};
const style = {
  height: '100vw'
};

function Introduction(props: propsType) {
  const pic = [
    'https://p2.eckwai.com/ufile/adsocial/1dc759e9-7c62-4ca8-9444-11891bdcbaa1.jpg',
    'https://p2.eckwai.com/ufile/adsocial/1dc759e9-7c62-4ca8-9444-11891bdcbaa1.jpg',
    'https://p2.eckwai.com/ufile/adsocial/1dc759e9-7c62-4ca8-9444-11891bdcbaa1.jpg'
  ];
  const { goodsInfo } = props;
  const [idx, setIdx] = useState(1);
  const handleChange = (e: number) => {
    setIdx(e + 1);
  };
  return (
    <div className=" flex flex-col justify-center w-full">
      <div className="w-screen relative" style={style}>
        <Carousel dots={false} afterChange={handleChange}>
          {pic.map((ele: string, idx: number) => {
            return (
              <div key={idx} style={style} className="relative">
                <img className="w-full object-cover" style={style} src={ele} alt=""></img>
              </div>
            );
          })}
        </Carousel>
        <div className="bg-picFont bg-opacity-50 inline-block absolute bottom-5 right-5 w-9 h-5 text-white text-center leading-5 rounded-xl">
          {idx}/{pic.length}
        </div>
      </div>

      <div className="w-full box-border p-4 bg-white">
        <div className="flex items-center text-myPink  font-semibold">
          <div className="text-xl">
            <span>￥</span>
            <span>{goodsInfo?.price.current}</span>
          </div>
          <div className="px-2 ml-1 rounded-2xl bg-myPink text-white text-sm flex items-center">
            <span className="text-xs">预估到手价</span>
            <div className="text-xl font-bold">
              <span>￥</span>
              <span>{goodsInfo?.price.actual}</span>
            </div>
            <RightOutlined />
          </div>
        </div>
        <div className="mt-2 mb-1 inline-block font-bold">
          <span>{goodsInfo?.saleInfo}</span>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          <span>支持7天无理由退货</span>
          <span className="ml-1">·</span>
          <span className="ml-1">极速退款</span>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          <span>{goodsInfo?.addressInfo}</span>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
