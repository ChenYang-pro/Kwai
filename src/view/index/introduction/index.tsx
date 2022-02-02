import { Button, Rate } from 'antd';
import { IntroMessage } from '../../common/type';
import { RightOutlined } from '@ant-design/icons';

type propsType = {
  info: IntroMessage | undefined;
};

function Introduction(props: propsType) {
  const { info } = props;
  const pictures = info?.pic
    ? info.pic.map((picUrl: string, idx: number) => (
        <div key={idx}>
          <h3>
            <img src={picUrl} alt="" />
          </h3>
        </div>
      ))
    : 'testError';
  console.log('11', info?.price, pictures);

  return (
    <div className="w-full flex flex-col justify-center">
      <div>
        <img className="w-full" src="https://p2.eckwai.com/ufile/adsocial/1dc759e9-7c62-4ca8-9444-11891bdcbaa1.jpg" alt=""></img>
      </div>
      <InfoTag />
      <StoreInfo />
    </div>
  );
}

function InfoTag() {
  return (
    <div className="w-full box-border p-4 bg-white">
      <div className="flex items-center text-orange-700  font-semibold">
        <div className="text-xl">
          <span>￥</span>
          <span>228</span>
        </div>
        <div className="px-2 ml-1 rounded-2xl bg-red-500 text-white text-sm flex items-center">
          <span>预估到手价</span>
          <div className="text-xl">
            <span>￥</span>
            <span>226</span>
          </div>
          <RightOutlined />
        </div>
      </div>
      <div className="mt-2 mb-1 inline-block font-bold">
        <span>测试商品勿拍不发货快手小块</span>
      </div>
      <div className="mt-2 text-sm text-gray-500">
        <span>支持7天无理由退货</span>
        <span className="ml-1">·</span>
        <span className="ml-1">极速退款</span>
      </div>
      <div className="mt-2 text-sm text-gray-500">
        <span>48小时内从北京市市辖区发货</span>
      </div>
    </div>
  );
}

function StoreInfo() {
  return (
    <div className="mt-2 bg-white p-4 box-border">
      <div className="flex items-center w-full box-border mb-3">
        <div className="mx-2 w-14 h-14">
          <img
            className="rounded-full"
            src="https://tx2.a.kwimgs.com/uhead/AB/2020/08/03/11/BMjAyMDA4MDMxMTQ2MzJfODMzMDkzOTVfMV9oZDQ0Xzg4Ng==_s.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="inline-block">
            <p>sir东东东的小店</p>
            <p className="mt-2 text-xs">总销量 83件</p>
          </div>
          <div className="flex justify-center">
            <Button type="primary" shape="round" danger>
              <span className="text-red-500 text-xs ">进店逛逛</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="box-border bg-gray-100 p-4">
        <div className="flex items-center">
          <div>购物体验星级</div>
          <Rate className="flex ml-2 " />
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <div className="flex justify-between">
            <div>商品质量</div>
            <div className="ml-1">4.5</div>
          </div>
          <div className="flex justify-between">
            <div>客服服务</div>
            <div className="ml-1">4.5</div>
          </div>
          <div className="flex justify-between">
            <div>物流速度</div>
            <div className="ml-1">4.5</div>
          </div>
          <div className="flex justify-between">
            <div>售后体验</div>
            <div className="ml-1">4.5</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
