import { Button } from 'antd';
import { UserOutlined, HomeOutlined, CommentOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <div className="bg-white fixed w-full h-16 -bottom-0 flex justify-between ">
      <div className="flex-1 px-1">
        <div className="flex justify-between items-center text-center">
          <div className="flex-1 flex-clo h-10 justify-around items-center">
            <span>
              <UserOutlined />
              <div>个人主页</div>
            </span>
          </div>
          <div className="flex-1 flex-clo h-10 justify-around items-center">
            <span>
              <HomeOutlined />
              <div>店铺</div>
            </span>
          </div>
          <div className="flex-1 flex-clo h-10 justify-around items-center">
            <span>
              <CommentOutlined />
              <div>客服</div>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center w-40">
        <Button type="primary" shape="round" size="large">
          领券购买
        </Button>
      </div>
    </div>
  );
}

export default Footer;
