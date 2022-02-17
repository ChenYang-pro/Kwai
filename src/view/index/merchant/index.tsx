import { Button, Rate } from 'antd';
import { MerchantMessage } from '../../common/type';

type propsType = {
  merchantInfo: MerchantMessage | undefined;
};

function Merchant(props: propsType) {
  const { merchantInfo } = props;
  return (
    <div className="mt-2 bg-white p-4 box-border w-full">
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
            <p>{merchantInfo?.goodsName}的小店</p>
            <p className="mt-2 text-xs">总销量{merchantInfo?.totalSale}件</p>
          </div>
          <div className="flex justify-center">
            <Button type="primary" shape="round" style={{ border: '1px solid #fe3666' }}>
              <span className="text-myPink text-xs">进店逛逛</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="box-border bg-gray-100 p-4">
        <div className="flex items-center">
          <div>购物体验星级</div>
          <Rate className="flex ml-2" value={merchantInfo?.merchantStar} allowClear={false} allowHalf />
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <div className="flex justify-between">
            <div>商品质量</div>
            <div className="ml-1">{merchantInfo?.merchantScore.produceQuality}</div>
          </div>
          <div className="flex justify-between">
            <div>客服服务</div>
            <div className="ml-1">{merchantInfo?.merchantScore.serviceQuality}</div>
          </div>
          <div className="flex justify-between">
            <div>物流速度</div>
            <div className="ml-1">{merchantInfo?.merchantScore.deliveryQuality}</div>
          </div>
          <div className="flex justify-between">
            <div>售后体验</div>
            <div className="ml-1">{merchantInfo?.merchantScore.afterQuality}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Merchant;
