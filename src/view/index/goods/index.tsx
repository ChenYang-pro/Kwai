import { IntroMessage } from '../../common/type';

type propsType = {
  goodsInfo: IntroMessage | undefined;
};

function Goods(props: propsType) {
  const { goodsInfo } = props;
  return (
    <div className="bg-white w-full box-border flex flex-col">
      <div className="px-5 pt-2 mb-2 font-semibold break-all  whitespace-pre-line leading-5">商品详情</div>
      <pre className="px-5 py-4 block leading-5">{goodsInfo?.goodsName}</pre>
      <img src="https://p1.eckwai.com/ufile/adsocial/1063e77d-5430-4747-a4b5-963b6ef41941.jpg" alt="" />
      <img src="https://p3.eckwai.com/ufile/adsocial/cdb18b93-097f-4a4b-ae97-4f44e22debef.jpg" alt="" />
      <img src="https://p3.eckwai.com/ufile/adsocial/2911125d-283b-4154-90ff-6d513849b344.jpg" alt="" />
    </div>
  );
}

export default Goods;
