import { RecommendMessage, RecommendCards } from '../../common/type';
import { useEffect, useState } from 'react';
import { fetchRecommend } from '../../common/queries';
import { useQuery } from 'react-query';

function LikeLiHood() {
  const [recommendData, setRecommendData] = useState<RecommendMessage>();
  const [cards, setCards] = useState<RecommendCards[] | undefined>();
  const [pageNum, setPageNum] = useState<number>(1);
  const [pageSize] = useState(2);
  const [totalNum, setTotalNum] = useState(1);
  const { isLoading } = useQuery('recommendInfo', async () => {
    const data = await fetchRecommend();
    setRecommendData(data.data);
    setTotalNum(data.data?.cards.length);
    setPageNum(1);
  });

  useEffect(() => {
    const Idx = pageNum * pageSize;
    if (Idx < totalNum && !isLoading) {
      const pageCards = recommendData?.cards.slice(0, Idx);
      setCards(pageCards);
    }
  }, [isLoading, pageNum, pageSize, recommendData?.cards, totalNum]);

  // 监听滚动
  useEffect(() => {
    window?.addEventListener('scroll', debounce(addList));
    return () => window?.removeEventListener('scroll', debounce(addList));
  });

  // 防抖
  function debounce(fn: Function, time = 800) {
    let timer: NodeJS.Timeout;
    return function () {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        addList();
      }, time);
    };
  }

  function addList() {
    // scrollTop是滚动条滚动时，距离顶部的距离
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // windowHeight是可视区的高度
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    // scrollHeight是滚动条的总高度
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    // 滚动条到底部
    if (scrollTop + windowHeight >= scrollHeight - 20) {
      // 到了底部之后想做的操作,如到了底部之后加载
      setPageNum(pageNum + 1);
    }
  }

  return (
    <div className="w-full mb-16">
      <div className="bg-likelihood bg-no-repeat bg-16 bg-center flex h-8 justify-center items-center"></div>
      <div className="grid grid-cols-2" id="list">
        {cards?.map((element) => {
          return (
            <div key={element.id}>
              <div className="flex flex-wrap bg-white p-1">
                <div className="flex-1 box-border overflow-hidden rounded w-2/4">
                  <div>
                    <div className="h-96">
                      <img
                        src="https://p1.eckwai.com/ufile/adsocial/1dc759e9-7c62-4ca8-9444-11891bdcbaa1.jpg"
                        alt="1"
                        className="h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="mt-1 text-xs mb-3">
                        <span>{element.recommendName}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="text-red-500 font-semibold">
                          <span>¥</span>
                          <span>{element.recommendPrice}</span>
                        </div>
                        <div className="text-gray-400 text-xs flex-1 text-right">
                          <span>已售{element.recommendSale}件</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LikeLiHood;
