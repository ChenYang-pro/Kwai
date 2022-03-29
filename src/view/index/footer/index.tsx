import { Button } from 'antd';
import { UserOutlined, HomeOutlined, CommentOutlined } from '@ant-design/icons';
import GoodsModal from './goodsModal/index';
import { useState } from 'react';

function Footer() {
  const [isModalVisible, setIsModalVisible] = useState<boolean | undefined>(false);

  const handleBtnClick = () => {
    setIsModalVisible(true);
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

      <GoodsModal isModalVisible={isModalVisible} />
    </div>
  );
}

export default Footer;
