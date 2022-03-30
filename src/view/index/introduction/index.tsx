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
  const { goodsInfo } = props;
  const [idx, setIdx] = useState(1);
  const handleChange = () => {
    let curIdx = idx + 1;
    if (curIdx > 3) {
      curIdx %= 3;
    }
    setIdx(curIdx);
  };
  return (
    <div className=" flex flex-col justify-center w-full">
      <div className="w-screen relative" style={style}>
        <Carousel dots={false} afterChange={handleChange}>
          <div style={style}>
            <img className="w-full object-cover" style={style} src={goodsInfo?.pic[0]} alt=""></img>
          </div>
          <div style={style}>
            <img className="w-full object-cover" style={style} src={goodsInfo?.pic[0]} alt=""></img>
          </div>
          <div style={style}>
            <img className="w-full object-cover" style={style} src={goodsInfo?.pic[0]} alt=""></img>
          </div>
        </Carousel>
        <div className="bg-picFont bg-opacity-50 absolute bottom-5 right-5 w-9 h-5 text-white text-center leading-5 rounded-xl">
          {idx}/3
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
