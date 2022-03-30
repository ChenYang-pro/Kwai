import { Button } from 'antd';
import { UserOutlined, HomeOutlined, CommentOutlined } from '@ant-design/icons';
import MyModal from '../../common/myModal/index';
import { useState } from 'react';

function FooterMenu() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleBtnClick = () => {
    setIsModalVisible(true);
  };

  const onModalCancle = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="bg-white fixed w-full h-14 -bottom-0 flex justify-between ">
      <div className="flex-1 px-1 text-sm ">
        <div className="flex justify-between items-center text-center h-full">
          <div className="flex-1 flex-col justify-around items-center">
            <span>
              <UserOutlined />
              <div>个人主页</div>
            </span>
          </div>
          <div className="flex-1 flex-col justify-around items-center">
            <span>
              <HomeOutlined />
              <div>店铺</div>
            </span>
          </div>
          <div className="flex-1 flex-col justify-around items-center">
            <span>
              <CommentOutlined />
              <div>客服</div>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center w-40">
        <Button
          onClick={handleBtnClick}
          className="flex justify-center items-center text-sm"
          type="primary"
          shape="round"
          size="large"
          style={{ background: '#fe3666', border: '#fe3666' }}
          block>
          领券购买
        </Button>
      </div>

      <MyModal
        TitleContent={GoodsDetailTitle}
        isVisible={isModalVisible}
        footerBtn={null}
        BodyContent={GoodsDetail}
        handleCancle={onModalCancle}
      />
    </div>
  );
}

function GoodsDetailTitle() {
  return (
    <div className="flex w-full h-20 flex-row">
      <div className="w-20 h-20">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="https://p2.eckwai.com/ufile/adsocial/1dc759e9-7c62-4ca8-9444-11891bdcbaa1.jpg"
          alt=""
        />
      </div>
      <div className="flex-1 flex-col ml-2 w-full">
        <div className="flex-row w-full">
          <div className="text-lg leading-5 inline-block text-myPink">
            <span>￥</span>
            <span>228</span>
          </div>
          <div className="inline-block">
            <div className="px-2 ml-2 rounded-2xl bg-myPink text-white flex items-center">
              <span className="text-xs">预估到手价</span>
              <div className="text-lg font-bold">
                <span>￥</span>
                <span>226 </span>
                <span className="text-sm">起</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm mt-2 text-myGray">
          <span>in store: 1049892</span>
        </div>
        <div className="text-base mt-2">
          <span>请选择规格</span>
        </div>
      </div>
    </div>
  );
}

function GoodsDetail() {
  const [goodsNum, setGoodsNum] = useState(1);
  return (
    <div className="flex flex-col justify-center">
      <div>
        <div className="mb-2 font-bold text-base">颜色</div>
        <div className="grid gap-4 grid-cols-3 p-1">
          <div className="bg-myGrey inline-block rounded-md">
            <span>测试商品：红色</span>
          </div>
          <div className="bg-myGrey inline-block rounded-md">
            <span>测试商品：紫色</span>
          </div>
          <div className="bg-myGrey inline-block rounded-md">
            <span>测试商品：绿色</span>
          </div>
          <div className="bg-myGrey inline-block rounded-md">
            <span>测试商品：白色</span>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-2 font-bold text-base mt-2">尺码</div>
        <div className="grid gap-4 grid-cols-3 p-1">
          <div className="bg-myGrey inline-block rounded-md">
            <span>测试商品：SM</span>
          </div>
          <div className="bg-myGrey inline-block rounded-md">
            <span>测试商品：XS</span>
          </div>
          <div className="bg-myGrey inline-block rounded-md">
            <span>测试商品：L</span>
          </div>
          <div className="bg-myGrey inline-block rounded-md">
            <span>测试商品：XL</span>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-2 font-bold text-base mt-2 flex justify-between">
          <span>数量</span>
          <div>
            <span
              onClick={() => {
                if (goodsNum > 1) {
                  setGoodsNum(goodsNum - 1);
                }
              }}>
              - &nbsp;{' '}
            </span>
            <span>{goodsNum}</span>
            <span
              onClick={() => {
                setGoodsNum(goodsNum + 1);
              }}>
              &nbsp; +
            </span>
          </div>
        </div>
      </div>
      <Button
        className="w-full flex justify-center items-center text-sm mt-2"
        type="primary"
        shape="round"
        size="large"
        style={{ background: '#fe3666', border: '#fe3666' }}
        block>
        领券购买
      </Button>
    </div>
  );
}

export default FooterMenu;
