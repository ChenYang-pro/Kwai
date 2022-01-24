import { Carousel } from 'antd';
import { IntroMessage } from '../common/type';

type propsType = {
  info: IntroMessage;
};

function Intro(props: propsType) {
  const { info } = props;
  const pictures = info.pic
    ? info.pic.map((picUrl: string, idx: number) => (
        <div key={idx}>
          <h3>
            <img src={picUrl} alt="" />
          </h3>
        </div>
      ))
    : 'testError';
  console.log('11', info.price, pictures);

  return (
    <div>
      <Carousel autoplay>
        <div>
          <img src="https://p2.eckwai.com/ufile/adsocial/1dc759e9-7c62-4ca8-9444-11891bdcbaa1.jpg" alt="" />
        </div>
        <div>
          <img src="https://p2.eckwai.com/ufile/adsocial/1dc759e9-7c62-4ca8-9444-11891bdcbaa1.jpg" alt="" />
        </div>{' '}
        <div>
          <img src="https://p2.eckwai.com/ufile/adsocial/1dc759e9-7c62-4ca8-9444-11891bdcbaa1.jpg" alt="" />
        </div>{' '}
        <div>
          <img src="https://p2.eckwai.com/ufile/adsocial/1dc759e9-7c62-4ca8-9444-11891bdcbaa1.jpg" alt="" />
        </div>{' '}
        <div>
          <img src="https://p2.eckwai.com/ufile/adsocial/1dc759e9-7c62-4ca8-9444-11891bdcbaa1.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Intro;
